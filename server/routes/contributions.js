const express = require('express');
const jwt = require('jsonwebtoken');
const Contribution = require('../models/Contribution');
const router = express.Router();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

router.post('/', authMiddleware, async (req, res) => {
    try {
        const { text, centerId } = req.body;
        const contribution = new Contribution({ userId: req.userId, text, centerId });
        await contribution.save();
        res.status(201).json(contribution);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const contributions = await Contribution.find().populate('userId', 'username');
        res.json(contributions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
