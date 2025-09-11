const express = require('express');
const jwt = require('jsonwebtoken');
const Center = require('../models/Center');
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
        const { title, description } = req.body;
        const center = new Center({ title, description, creatorId: req.userId });
        await center.save();
        res.status(201).json(center);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const centers = await Center.find().populate('creatorId', 'username');
        res.json(centers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
