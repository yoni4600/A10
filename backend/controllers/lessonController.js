import { ObjectId } from 'mongodb';

/**
 * Retrieves all lessons from the MongoDB collection.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getAllLessons(req, res, client) {
    try {
        // Accessing the 'pilokdb' database
        const database = client.db('pilokdb');

        // Accessing the 'Lessons' collection
        const lessons = database.collection('Lessons');

        // Fetching all lessons from the collection
        const allLessons = await lessons.find({}).toArray();
        res.json(allLessons);
    } catch (e) {
        res.status(500).send("Error fetching lessons");
        console.error(e);
    }
}

/**
 * Retrieves a specific lesson by its ID from the MongoDB collection.
 * @param {object} req - The request object containing the lesson ID.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getLessonById(req, res, client) {
    try {
        const lessonId = req.params.id; // Assuming the ID is provided as a request parameter
        const database = client.db('pilokdb');
        const lessons = database.collection('Lessons');

        // Convert the string ID to ObjectId
        const objectId = new ObjectId(lessonId);

        // Find the lesson by ID
        const lesson = await lessons.findOne({ _id: objectId });

        if (!lesson) {
            res.status(404).send("Lesson not found");
        } else {
            res.json(lesson);
        }
    } catch (e) {
        res.status(500).send("Error fetching lesson by ID");
        console.error(e);
    }
}