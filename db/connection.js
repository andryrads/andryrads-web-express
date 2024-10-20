const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://andryrads:root7mongodbA%21@andryrads-web-cluster.lxkuc.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
    try {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
    return client;
}

module.exports = connectDB;
