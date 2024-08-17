const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

//---------------------------------------------------//

var followingClubs = ["foodies-club-005","music-lovers-004"];
var myClubs = ["book-club-001","tech-enthusiasts-002"];

var clubs = [
  {
    _id: '1',
    clubName: 'Book Club',
    clubId: 'book-club-001',
    logo: 'http://example.com/logo1.png',
    priority: 0
  },
  {
    _id: '2',
    clubName: 'Tech Enthusiasts',
    clubId: 'tech-enthusiasts-002',
    logo: 'http://example.com/logo2.png',
    priority: 0
  },
  {
    _id: '3',
    clubName: 'Art Society',
    clubId: 'art-society-003',
    logo: 'http://example.com/logo3.png',
    priority: 0
  },
  {
    _id: '4',
    clubName: 'Music Lovers',
    clubId: 'music-lovers-004',
    logo: 'http://example.com/logo4.png',
    priority: 0
  },
  {
    _id: '5',
    clubName: 'Foodies Club',
    clubId: 'foodies-club-005',
    logo: 'http://example.com/logo5.png',
    priority: 0
  }
];


var clubsAdv = [
    {
      _id: '1',
      clubName: 'Book Club',
      clubId: 'book-club-001',
      logo: 'http://example.com/logo1.png',
      announcements: [
        { aid:"1",text: 'Monthly meeting scheduled.', date: new Date('2024-09-10T14:00:00Z') },
        { aid:"2",text: 'Book drive next week.', date: new Date('2024-09-17T10:00:00Z') }
      ],
      events: [
        { name: 'Book Reading', date: new Date('2024-09-15T18:00:00Z'),  type:"Hackethon" },
        { name: 'Discussion Panel', date: new Date('2024-09-22T19:00:00Z'),  type:"Conference" }
      ],
      about: 'The Book Club is a community of avid readers who gather to discuss various literary works. We meet monthly to share our thoughts and enjoy engaging conversations about books from different genres. Join us for an enriching reading experience.',
      contact: 'http://example.com/book-club',
      admin : "me"
    },
    {
      _id: '2',
      clubName: 'Tech Enthusiasts',
      clubId: 'tech-enthusiasts-002',
      logo: 'http://example.com/logo2.png',
      announcements: [
        { aid:"1",text: 'Tech workshop this Saturday.', date: new Date('2024-09-13T09:00:00Z') },
        { aid:"2",text: 'Guest speaker on AI next month.', date: new Date('2024-10-10T11:00:00Z') }
      ],
      events: [
        { name: 'Coding Bootcamp', date: new Date('2024-09-20T09:00:00Z'),  type:"Hackethon" },
        { name: 'AI Seminar', date: new Date('2024-10-05T14:00:00Z'),  type:"Seminar" }
      ],
      about: 'Tech Enthusiasts is a group dedicated to exploring and discussing the latest in technology and innovation. We host workshops, seminars, and coding bootcamps to keep our members at the forefront of tech advancements.',
      contact: 'http://example.com/tech-enthusiasts',
      admin : "me"
    },
    {
      _id: '3',
      clubName: 'Art Society',
      clubId: 'art-society-003',
      logo: 'http://example.com/logo3.png',
      announcements: [
        { aid:"1",text: 'Art exhibition opening this Friday.', date: new Date('2024-09-12T18:00:00Z') },
        { aid:"2",text: 'Painting workshop available next week.', date: new Date('2024-09-18T10:00:00Z') }
      ],
      events: [
        { name: 'Art Exhibition', date: new Date('2024-09-15T10:00:00Z'),  type:"Hackethon" },
        { name: 'Workshop: Acrylic Techniques', date: new Date('2024-09-25T13:00:00Z'),  type:"Hackethon" }
      ],
      about: 'The Art Society is a vibrant community for artists and art lovers. We organize exhibitions, workshops, and collaborative projects to foster creativity and provide a platform for artistic expression.',
      contact: 'http://example.com/art-society',
      admin : "notme"
    },
    {
      _id: '4',
      clubName: 'Music Lovers',
      clubId: 'music-lovers-004',
      logo: 'http://example.com/logo4.png',
      announcements: [
        { aid:"1",text: 'Open mic night this Friday.', date: new Date('2024-09-08T19:00:00Z') },
        { aid:"2",text: 'Music festival next month.', date: new Date('2024-10-05T15:00:00Z') }
      ],
      events: [
        { name: 'Open Mic Night', date: new Date('2024-09-15T19:00:00Z'),  type:"Hackethon" },
        { name: 'Annual Music Festival', date: new Date('2024-10-10T12:00:00Z'),  type:"Hackethon" }
      ],
      about: 'Music Lovers brings together people who are passionate about music. We host events, performances, and jam sessions to celebrate all genres and create a community of music enthusiasts.',
      contact: 'http://example.com/music-lovers',
      admin : "notme"
    },
    {
      _id: '5',
      clubName: 'Foodies Club',
      clubId: 'foodies-club-005',
      logo: 'http://example.com/logo5.png',
      announcements: [
        { aid:"1",text: 'Potluck dinner this weekend.', date: new Date('2024-09-12T18:00:00Z') },
        { aid:"2",text: 'Cooking class on September 20th.', date: new Date('2024-09-20T11:00:00Z') }
      ],
      events: [
        { name: 'Monthly Potluck', date: new Date('2024-09-15T17:00:00Z'), type:"Hackethon" },
        { name: 'Cooking Class: Italian Cuisine', date: new Date('2024-09-25T14:00:00Z'),  type:"Hackethon"}
      ],
      about: 'Foodies Club is for those who love to cook and enjoy delicious food. We organize potlucks, cooking classes, and culinary events to share recipes, techniques, and great meals.',
      contact: 'http://example.com/foodies-club',
      admin : "notme"
    }
  ];
  

  const transformClubsAdvToClubs = (clubsAdv) => {
    return clubsAdv.map(({ _id, clubName, clubId, logo }) => ({
      _id,
      clubName,
      clubId,
      logo
    }));
  };


//---------------------------------------------------//


app.get('/api/clubs', (req, res) => {
    const query = req.query.name || '';
    
    if (!query) {
      return res.json(clubs);
    }
  
    const filteredClubs = clubs.filter(club => 
      club.clubName.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(filteredClubs);
});


app.get('/api/clubs/myclubs', (req, res) => {
    const filteredClubs = clubs.filter(club =>
        myClubs.includes(club.clubId)
    );

    const query = req.query.name || '';
    
    if (!query) {
      return res.json(filteredClubs);
    }
  
    const filteredClubsAdv = filteredClubs.filter(club => 
      club.clubName.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(filteredClubsAdv);
});

app.get('/api/clubs/following', (req, res) => {
    const filteredClubs = clubs.filter(club =>
        followingClubs.includes(club.clubId)
    );
    
    const query = req.query.name || '';
    
    if (!query) {
      return res.json(filteredClubs);
    }
  
    const filteredClubsAdv = filteredClubs.filter(club => 
      club.clubName.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(filteredClubsAdv);
});

app.get('/api/clubs/:id/get', (req, res) => {
    const { id } = req.params;
    const club = clubsAdv.find(club => club.clubId === id);
    console.log(id)
    if (club) {
      res.json(club);
    } else {
      res.status(404).json({ message: 'Club not found' });
    }
  });




  app.post('/api/clubs', (req, res) => {
    const { name, clubId, about, contact, logo} = req.body;
    console.log(req.body);
    if (!name || !clubId || !about || !contact === null) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const existingClub = clubsAdv.find(club => club.clubId === clubId);
    if (existingClub) {
      return res.status(400).json({ message: 'Club ID already exists' });
    }
  console.log(existingClub);
    const newClub = {
        _id: (clubsAdv.length + 1).toString(), 
        clubName: name,
        clubId,
        logo: logo || null,
        announcements: [], 
        events: [],
        about,
        contact,
        admin : "me"
      };
    clubsAdv.push(newClub);
    clubs = transformClubsAdvToClubs(clubsAdv);
    myClubs.push(clubId);
    console.log('pushed');
    res.status(201).json({ message: 'Club created successfully', club: newClub });
  });

app.delete('/api/clubs/announcement', (req, res) => {
    console.log("hiiiii");
    const { clubId, aid } = req.query;
    console.log(clubId,"clubId aid", aid);
    if (!clubId || !aid) {
        return res.status(400).json({ message: 'Both clubId and announcement ID (aid) are required' });
    }

    const club = clubsAdv.find(club => club.clubId === clubId);
    console.log(club,"club");
    if (!club) {
        return res.status(404).json({ message: 'Club not found 1' });
    }

    const initialLength = club.announcements.length;
    club.announcements = club.announcements.filter(announcement => announcement.aid !== aid);
    console.log(club.announcements.length,"length");
    if (club.announcements.length < initialLength) {
        clubs = transformClubsAdvToClubs(clubsAdv);
        return res.status(200).json({ message: 'Announcement deleted successfully' });
    } else {
        return res.status(404).json({ message: 'Announcement not found' });
    }
});

app.post('/api/clubs/follow', (req, res) => {
  const { clubId } = req.query;

  if (!clubId) {
      return res.status(400).json({ message: 'Club ID is required' });
  }

  if (myClubs.includes(clubId)) {
      return res.status(400).json({ message: 'Club is already in my clubs' });
  }

  if (followingClubs.includes(clubId)) {
      return res.status(200).json({ message: 'You are already following this club' });
  }

  followingClubs.push(clubId);

  const club = clubs.find(club => club.clubId === clubId);

  if (club) {
      club.priority += 1;
      clubs.sort((a, b) => b.priority - a.priority);
      res.status(200).json({ message: 'Successfully followed the club', clubId, clubs });
  } else {
      res.status(404).json({ message: 'Club not found' });
  }
});


app.post('/api/clubs/unfollow', (req, res) => {
  const { clubId } = req.query;

  if (!clubId) {
      return res.status(400).json({ message: 'Club ID is required' });
  }

  const index = followingClubs.indexOf(clubId);

  if (index === -1) {
      return res.status(404).json({ message: 'Club not found in following list' });
  }

  followingClubs.splice(index, 1);

  const club = clubs.find(club => club.clubId === clubId);

  if (club) {
      club.priority -= 1;
      clubs.sort((a, b) => b.priority - a.priority);
      res.status(200).json({ message: 'Successfully unfollowed the club', clubId, clubs });
  } else {
      res.status(404).json({ message: 'Club not found' });
  }
});


app.get('/api/clubs/follow-status', (req, res) => {
    const { clubId } = req.query;
    if (!clubId) {
        return res.status(400).json({ message: 'clubId is required' });
    }

    const isFollowing = followingClubs.includes(clubId);
    res.json({ isFollowing });
});


app.put('/api/clubs/:id', (req, res) => {
  const { id } = req.params;
  const { name, clubId, about, contact, logo } = req.body;

  if (!name || !clubId || !about || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
  }

  const existingClub = clubsAdv.find(club => club.clubId === id);

  if (existingClub) {
      existingClub.clubName = name;
      existingClub.clubId = clubId;
      existingClub.about = about;
      existingClub.contact = contact;
      existingClub.logo = logo || existingClub.logo;

      clubs = clubs.map(club => 
          club.clubId === id 
          ? { ...club, clubName: name, clubId: clubId, logo: logo || club.logo } 
          : club
      );

      res.status(200).json({ message: 'Club updated successfully', club: existingClub });
  } else {
      return res.status(404).json({ message: 'Club not found' });
  }
});


app.post('/api/clubs/announcement', (req, res) => {
  const { clubId, text } = req.body;

  if (!clubId || !text) {
      return res.status(400).json({ message: 'Both clubId and announcement text are required' });
  }

  const club = clubsAdv.find(club => club.clubId === clubId);

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

  clubs = transformClubsAdvToClubs(clubsAdv);

  res.status(201).json({ message: 'Announcement added successfully', announcement: newAnnouncement });
});


app.post('/api/clubs/report-spam', (req, res) => {
  const { clubId } = req.body;

  if (!clubId) {
    return res.status(400).json({ message: 'clubId is required' });
  }

  const club = clubs.find(club => club.clubId === clubId);

  if (!club) {
    return res.status(404).json({ message: 'Club not found' });
  }

  club.priority -= 10;

  clubs.sort((a, b) => b.priority - a.priority);

  res.status(200).json(clubs);
});


//---------------------------------------------------//


app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000 :)');
});
