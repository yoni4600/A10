import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://yechezke:123456FF@pilokdb.x6xedkb.mongodb.net/";
const client = new MongoClient(uri);

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    } catch (e) {
        console.error("Could not connect to MongoDB", e);
        process.exit(1);
    }
}
