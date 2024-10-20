const express = require('express');
const router = express.Router();
const connectDB = require('../db/connection');

router.get('/list-language', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('itskill');

        const itskill = await collection.aggregate([
            { $match: { type: 'language' } },
            { $sort: { order: 1 } }
        ]).toArray();
        res.status(200).json(itskill);
    } catch (error) {
        console.error('Error fetching IT skill:', error);
        res.status(500).json({ message: 'Error fetching IT skill' });
    }
});

router.get('/list-fwlb', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('itskill');

        const itskill = await collection.aggregate([
            { $match: { type: 'fwlb' } },
            { $sort: { order: 1 } }
        ]).toArray();
        res.status(200).json(itskill);
    } catch (error) {
        console.error('Error fetching IT skill:', error);
        res.status(500).json({ message: 'Error fetching IT skill' });
    }
});

router.get('/list-techstack', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('itskill');

        const itskill = await collection.aggregate([
            { $match: { type: 'techstack' } },
            { $sort: { order: 1 } }
        ]).toArray();
        res.status(200).json(itskill);
    } catch (error) {
        console.error('Error fetching IT skill:', error);
        res.status(500).json({ message: 'Error fetching IT skill' });
    }
});

router.get('/list-multimedia', async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db('test');
        const collection = db.collection('itskill');

        const itskill = await collection.aggregate([
            { $match: { type: 'multimedia' } },
            { $sort: { order: 1 } }
        ]).toArray();
        res.status(200).json(itskill);
    } catch (error) {
        console.error('Error fetching IT skill:', error);
        res.status(500).json({ message: 'Error fetching IT skill' });
    }
});

module.exports = router;
