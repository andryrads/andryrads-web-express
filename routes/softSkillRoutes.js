const express = require('express');
const router = express.Router();
const connectDB = require('../db/connection');

router.get('/list', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('softskill');

        const softskill = await collection.aggregate([
            { $sort: { order: 1 } }
        ]).toArray();
        res.status(200).json(softskill);
    } catch (error) {
        console.error('Error fetching soft skill:', error);
        res.status(500).json({ message: 'Error fetching soft skill' });
    }
});

module.exports = router;
