import { MongoClient } from 'mongodb';

//const uri = "mongodb+srv://eyalaxl:eyalpilok1@pilokdb.x6xedkb.mongodb.net/";
const uri = "mongodb+srv://liorzucker:aviv1994@pilokdb.x6xedkb.mongodb.net/";



const client = new MongoClient(uri);

export async function connectToDatabase() {
    try {
        await client.connect();
        return client;
    } catch (e) {
        console.error("Could not connect to MongoDB", e);
        process.exit(1);
    }
}
