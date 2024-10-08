const express=require("express");
const cors=require("cors")
const mongoose=require("mongoose");
const AuthRoutes=require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser");

const app=express();


app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));



mongoose.connect("mongodb+srv://22z319:BShjQmt36EWjW7hX@cluster0.3plkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
     //useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(()=>{
    console.log("mongo connected");
}).catch((err)=>console.log(err.message));

app.use(cookieParser());
app.use(express.json());
app.use("/",AuthRoutes);


//////////////////////



//---------------------------------------------------//

//---------------------------------------------------//

const Club = require('./Models/Club');

//---------------------------------------------------//
//---------------------------------------------------//

const multer = require('multer');
const path = require('path');
const Logo = require('./Models/Logo');
const { use } = require('./Routes/AuthRoutes');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/api/clubs/logo', upload.single('logo'), async (req, res) => {
  const { clubId } = req.body;
  const { file } = req;

  if (!clubId || !file) {
    return res.status(400).json({ message: 'Club ID and logo file are required' });
  }

  try {

    let logo = await Logo.findOne({ clubId });

    if (logo) {
      logo.logo.data = file.buffer;
      logo.logo.contentType = file.mimetype;
      await logo.save();
    } else {
      logo = new Logo({
        clubId,
        logo: {
          data: file.buffer,
          contentType: file.mimetype
        }
      });
      await logo.save();
    }

    res.status(201).json({ message: 'Logo uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading logo' });
  }
});


app.get('/api/clubs/logo/:clubId', async (req, res) => {
  const { clubId } = req.params;

  try {
    const logo = await Logo.findOne({ clubId });

    if (!logo) {
      return res.status(404).json({ message: 'Logo not found' });
    }

    res.contentType(logo.logo.contentType);
    res.send(logo.logo.data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching logo' });
  }
});




app.put('/api/clubs/logo/:clubId', upload.single('logo'), async (req, res) => {
  const { clubId } = req.params;
  const { file } = req;

  if (!file) {
    return res.status(400).json({ message: 'Logo file is required' });
  }

  try {
    let logo = await Logo.findOne({ clubId });

    if (logo) {
      logo.logo.data = file.buffer;
      logo.logo.contentType = file.mimetype;
      await logo.save();
      res.status(200).json({ message: 'Logo updated successfully' });
    } else {
      logo = new Logo({
        clubId,
        logo: {
          data: file.buffer,
          contentType: file.mimetype
        }
      });
      await logo.save();
      res.status(201).json({ message: 'Logo created successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating logo' });
  }
});

//---------------------------------------------------//
//---------------------------------------------------//

app.get('/api/clubs', async (req, res) => {
    const query = req.query.name || '';
    
    try {
        let clubs;
        if (query) {
            console.log("about to fetch qry "+query)
            clubs = await Club.find({ clubName: new RegExp(query, 'i') }).sort({ priority: -1 });;
        } else {
            console.log("No query")
            clubs = await Club.find().sort({ priority: -1 });
        }
        console.log("clubs fetched for qry "+query)
        res.json(clubs);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching clubs' });
    }
});



app.get('/api/clubs/myclubs/:username',async (req, res) => {
  const query = req.query.name || '';
  const {username} = req.params;

  try {
      let clubs;
      if (query) {
        clubs = await Club.find({
          admin: username, 
          clubName: new RegExp(query, 'i')
      }).sort({ priority: -1 });
      } else {
        clubs = await Club.find({ admin: username }).sort({ priority: -1 });
      }
      res.json(clubs);
  } catch (err) {
      res.status(500).json({ message: 'Error fetching clubs' });
  }
});

app.get('/api/clubs/following/:username', async (req, res) => {
  const username = req.params.username;
  const query = req.query.name || '';
  try {
      let clubs;

      clubs = await Club.find({
          followers: username
      }).sort({ priority: -1 });

      if (query) {
          clubs = clubs.filter(club => 
              club.clubName.match(new RegExp(query, 'i'))
          );
      }

      res.json(clubs);
  } catch (err) {
      res.status(500).json({ message: 'Error fetching clubs' });
  }
});


app.get('/api/clubs/:id/get', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching club with ID: ${id}`);

    const club = await Club.findOne({ clubId: id });

    if (club) {
      res.json(club);
    } else {
      res.status(404).json({ message: 'Club not found' });
    }
  } catch (error) {
    console.error('Error fetching club:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

  app.post('/api/clubs', async (req, res) => {
    const { name, clubId, about, contact,admin} = req.body;
    
    if (!name || !clubId || !about || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    try {
        const existingClub = await Club.findOne({ clubId });
        if (existingClub) {
            return res.status(400).json({ message: 'Club ID already exists' });
        }

        const newClub = new Club({
            clubName: name,
            clubId,
            announcements: [],
            events: [],
            about,
            contact,
            admin: admin,
        });

        await newClub.save();
        res.status(201).json({ message: 'Club created successfully', club: newClub });
    } catch (err) {
        res.status(500).json({ message: 'Error creating club' });
    }
});


app.delete('/api/clubs/announcement', async (req, res) => {
  const { clubId, aid } = req.query;

  try {
      const club = await Club.findOne({ clubId });
      if (!club) {
          return res.status(404).json({ message: 'Club not found' });
      }

      club.announcements = club.announcements.filter(announcement => announcement.aid !== aid);
      await club.save();
      res.status(200).json({ message: 'Announcement deleted' });
  } catch (err) {
      res.status(500).json({ message: 'Error deleting announcement' });
  }
});


app.post('/api/clubs/follow/:username', async (req, res) => {
  const { clubId } = req.query;
  const {username} = req.params;

  if (!clubId) {
    return res.status(400).json({ message: 'Club ID is required' });
  }

  try {
    const club = await Club.findOne({ clubId });

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }
    if(club.admin == username){
      res.status(400).json({message : 'You cannot follow this club since you are admin of this club'})
    }
    if(club.followers.includes(username)){
      return res.status(400).json({ message: 'Already following this club' });
    }
    club.followers.push(username);
    club.priority += 1;
    await club.save();

    res.status(200).json({ message: 'Successfully followed the club' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.post('/api/clubs/unfollow/:username', async (req, res) => {
  const { clubId } = req.query;
  const {username} = req.params;

  if (!clubId) {
    return res.status(400).json({ message: 'Club ID is required' });
  }


  try {
    const club = await Club.findOne({ clubId });

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }
    if(club.admin == username){
      res.status(400).json({message : 'You cannot unfollow this club since you are admin of this club'})
    }
    if(!club.followers.includes(username)){
      return res.status(400).json({ message: 'Already not following this club' });
    }

    const index = club.followers.indexOf(username);

    if (index === -1) {
      return res.status(404).json({ message: 'Club not found in following list' });
    }

    club.followers.splice(index, 1);

    club.priority -= 1;
    await club.save();

    res.status(200).json({ message: 'Successfully unfollowed the club' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.get('/api/clubs/follow-status/:username', async (req, res) => {
    const { clubId } = req.query;
    const {username} = req.params;
    
    if (!clubId) {
        return res.status(400).json({ message: 'clubId is required' });
    }
    const club = await Club.findOne({ clubId });

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    const isFollowing = club.followers.includes(username);
    res.json({ isFollowing });
});


app.put('/api/clubs/:id', async (req, res) => {
  const { id } = req.params;
  const { name, about, contact } = req.body;

  if (!name || !about || !contact) {
    return res.status(400).json({ message: 'Name, about, and contact are required' });
  }

  try {
    const updatedClub = await Club.findOneAndUpdate(
      { clubId: id },
      { clubName : name, about, contact },
      { new: true, runValidators: true }
    );
    console.log(updatedClub ? "yes":"No");
      if (!updatedClub) {
          return res.status(404).json({ message: 'Club not found' });
      }
      res.json({ message: 'Club updated', club: updatedClub });
  } catch (err) {
      res.status(500).json({ message: 'Error updating club' });
  }
});


app.post('/api/clubs/announcement', async (req, res) => {
    const { clubId, text } = req.body;

    if (!clubId || !text) {
        return res.status(400).json({ message: 'Both clubId and announcement text are required' });
    }

    try {
        const club = await Club.findOne({ clubId });

        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }

        const newAnnouncement = {
            aid: (club.announcements.length + 1).toString(),
            text,
            date: new Date()
        };

        club.announcements.push(newAnnouncement);
        club.announcements.sort((a, b) => new Date(b.date) - new Date(a.date));

        await club.save();

        res.status(201).json({ message: 'Announcement added successfully', announcement: newAnnouncement });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/api/clubs/report-spam/:username', async (req, res) => {
    const { clubId } = req.body;
    const {username} = req.params;

    if (!clubId) {
        return res.status(400).json({ message: 'clubId is required' });
    }

    try {
        const club = await Club.findOne({ clubId });

        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }

        if(club.reporters.includes(username)){
          return res.status(400).json({ message: 'Already reported' });
        }
        else{
          club.reporters.push(username);
        }
        club.priority -= 10;
        if (club.priority < -100) {
          try {
              await Club.deleteOne({ clubId: club.clubId }); 
              console.log(`Club with ID ${club.clubId} has been removed due to low priority.`);
              return res.status(201).json({message: 'club has been reported'});
          } catch (err) {
              console.error('Error removing club:', err);
          }
      }      

        await club.save();

        const updatedClubs = await Club.find().sort({ priority: -1 });

        res.status(200).json(updatedClubs);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/api/clubs/:clubId', async (req, res) => {
  const { clubId } = req.params;
  const username = req.query.username;
  console.log(username);
  if (!clubId) {
    return res.status(400).json({ message: 'Club ID is required' });
  }

  try {
    const club = await Club.findOne({ clubId });

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    if (club.admin !== username) {
      console.log(username);
      console.log(club.admin);
      return res.status(403).json({ message: 'You are not authorized to delete this club' });
    }

    await Club.deleteOne({ clubId });

    res.status(200).json({ message: 'Club deleted successfully' });
  } catch (err) {
    console.error('Error deleting club:', err);
    res.status(500).json({ message: 'Error deleting club' });
  }
});

//---------------------------------------------------//


app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000 :)');
});

