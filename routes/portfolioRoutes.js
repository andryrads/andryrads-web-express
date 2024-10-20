const express = require('express');
const router = express.Router();
const connectDB = require('../db/connection');

router.get('/', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('portfolio');

        const portfolio = await collection.findOne({});
        res.status(200).json(portfolio);
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        res.status(500).json({ message: 'Error fetching portfolio data' });
    }
});

module.exports = router;
