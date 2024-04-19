import { ObjectId } from 'mongodb';

/**
 * Retrieves all quizzes from the MongoDB collection.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getAllQuiezzes(req, res, client) {
    try {
        // Accessing the 'pilokdb' database
        const database = client.db('pilokdb');

        // Accessing the 'Quizzes' collection
        const queizzes = database.collection('Quizzes');

        // Fetching all quizzes from the collection
        const allQuiezzes = await queizzes.find({}).toArray();
        res.json(allQuiezzes);
    } catch (e) {
        res.status(500).send("Error fetching lessons");
        console.error(e);
    }
}

/**
 * Retrieves a specific quiz by its ID from the MongoDB collection.
 * @param {object} req - The request object containing the quiz ID.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getQuizById(req, res, client) {
    try {
        const quizId = req.params.id; // Assuming the ID is provided as a request parameter
        const database = client.db('pilokdb');
        const queizzes = database.collection('Quizzes');

        // Convert the string ID to ObjectId
        const objectId = new ObjectId (quizId);

        // Find the lesson by ID
        const quiz = await queizzes.findOne({ _id: objectId });

        if (!quiz) {
            res.status(404).send("Quiz not found");
        } else {
            res.json(quiz);
        }
    } catch (e) {
        res.status(500).send("Error fetching quiz by ID");
        console.error(e);
    }
}