const express = require('express');
const router = express.Router();
const connectDB = require('../db/connection');

router.get('/list', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('certifications');

        const certificates = await collection.find({}).toArray();
        res.status(200).json(certificates);
    } catch (error) {
        console.error('Error fetching certificates:', error);
        res.status(500).json({ message: 'Error fetching certificates' });
    }
});

module.exports = router;
