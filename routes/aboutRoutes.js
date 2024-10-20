const express = require('express');
const router = express.Router();
const connectDB = require('../db/connection');

router.get('/', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('about');

        const about = await collection.findOne({});
        res.status(200).json(about);
    } catch (error) {
        console.error('Error fetching "about me" narrative:', error);
        res.status(500).json({ message: 'Error fetching "about me" narrative' });
    }
});

module.exports = router;
