const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    centerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contribution', contributionSchema);
