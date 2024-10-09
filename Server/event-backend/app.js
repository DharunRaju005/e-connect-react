const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection string
const dbURI = "mongodb+srv://22z319:BShjQmt36EWjW7hX@cluster0.3plkr.mongodb.net/eventsDB?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Event Schema
const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  description: String,
  members: String,
  pricePool: String,
  clubId: String // This field can have a dummy value or be removed in future updates
});

const Event = mongoose.model('Event', eventSchema);

// Registration Schema
const registrationSchema = new mongoose.Schema({
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  gender: String,
  institution: String,
  eventName: String
});

const Registration = mongoose.model('Registration', registrationSchema);

// Fetch all events
app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).send("Error fetching events: " + err);
  }
});

// Register to an event
app.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: "Registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed: " + err });
  }
});

// Insert sample events data into MongoDB
app.post('/insertEvents', async (req, res) => {
  try {
    const events = [
      {
        name: "Visa Hackathon",
        date: "2024-10-15",
        location: "Chennai",
        description: "Innovate and solve challenges in digital payments.",
        members: "1-3 per team",
        pricePool: "$10,000",
        clubId: "dummy-value" // Can be removed or left as is for future purposes
      },
      {
        name: "AI Conference",
        date: "2024-11-05",
        location: "Bangalore",
        description: "AI research and innovations.",
        members: "Open to all",
        pricePool: "No prize",
        clubId: "dummy-value"
      },
      {
        name: "Paper Presentation",
        date: "2024-12-12",
        location: "Hyderabad",
        description: "Research papers on various topics.",
        members: "Open to all",
        pricePool: "No prize",
        clubId: "dummy-value"
      },
      {
        name: "Cybersecurity Summit",
        date: "2024-12-20",
        location: "Mumbai",
        description: "Talks on cybersecurity.",
        members: "Open to all",
        pricePool: "$5,000",
        clubId: "dummy-value"
      }
    ];
    await Event.insertMany(events);
    res.status(201).json({ message: "Events inserted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Event insertion failed: " + err });
  }
});

app.get('/registeredEvents/:email', async (req, res) => {
  try {
    const registeredEvents = await Registration.find({ email: req.params.email });
    res.json(registeredEvents);
  } catch (err) {
    res.status(500).send("Error fetching registered events: " + err);
  }
});
// Run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
