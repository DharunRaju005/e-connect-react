const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  aid: String,
  text: String,
  date: Date,
});

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  type: String,
});

const clubSchema = new mongoose.Schema({
  clubName: { type: String, required: true },
  clubId: { type: String, required: true, unique: true },
  announcements: [announcementSchema],
  events: [eventSchema],
  about: String,
  contact: String,
  admin: String,
  priority: { type: Number, default: 0 },
});

module.exports = mongoose.model('Club', clubSchema);
