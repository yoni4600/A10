import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://eyalaxl:eyalpilok1@pilokdb.x6xedkb.mongodb.net/";
const client = new MongoClient(uri);

/**
 * Connects to the MongoDB database.
 * @returns {object} MongoDB client instance.
 */
export async function connectToDatabase() {
    try {
        await client.connect();
        return client;
    } catch (e) {
        console.error("Could not connect to MongoDB", e);
        process.exit(1);
    }
}
