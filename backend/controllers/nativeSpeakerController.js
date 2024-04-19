import { ObjectId } from 'mongodb';

/**
 * Retrieves all native speakers from the MongoDB collection.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getAllNativeSpeakers(req, res, client) {
    try {
        // Accessing the 'pilokdb' database
        const database = client.db('pilokdb');

        // Accessing the 'users' collection
        const nativeSpeakers = database.collection('users');

        // Fetching all native speakers from the collection
        const allNativeSpeakers = await nativeSpeakers.find({ userType: "NativeSpeaker" }).toArray();
        res.json(allNativeSpeakers);
    } catch (e) {
        res.status(500).send("Error fetching nativeSpeakers");
        console.error(e);
    }
}

/**
 * Retrieves a specific native speaker by their ID from the MongoDB collection.
 * @param {object} req - The request object containing the native speaker ID.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getNativeSpeakerById(req, res, client) {
    try {
        const nativeSpeakerId = req.params.id; // Assuming the ID is provided as a request parameter
        const database = client.db('pilokdb');
        const nativeSpeakers = database.collection('users');

        // Convert the string ID to ObjectId
        const objectId = new ObjectId(nativeSpeakerId);

        // Find the lesson by ID
        const nativeSpeaker = await nativeSpeakers.findOne({ _id: objectId });

        if (!nativeSpeaker) {
            res.status(404).send("NativeSpeaker not found");
        } else {
            res.json(nativeSpeaker);
        }
    } catch (e) {
        res.status(500).send("Error fetching nativeSpeaker by ID");
        console.error(e);
    }
}