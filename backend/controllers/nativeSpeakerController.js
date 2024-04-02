import { ObjectId } from 'mongodb';

export async function getAllNativeSpeakers(req, res, client) {
    try {
        const database = client.db('pilokdb');
        const nativeSpeakers = database.collection('users');
        const allNativeSpeakers = await nativeSpeakers.find({ userType: "NativeSpeaker" }).toArray();
        res.json(allNativeSpeakers);
    } catch (e) {
        res.status(500).send("Error fetching nativeSpeakers");
        console.error(e);
    }
}

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