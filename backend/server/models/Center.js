const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Center', centerSchema);
