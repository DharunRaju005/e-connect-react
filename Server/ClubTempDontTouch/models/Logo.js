const mongoose = require('mongoose');

const logoSchema = new mongoose.Schema({
  clubId: { type: String, required: true, unique: true },
  logo: { data: Buffer, contentType: String },
}, { timestamps: true });

module.exports = mongoose.model('Logo', logoSchema);
