import { ObjectId } from 'mongodb';

export async function getAllQuizzes(req, res, client) {
    try {
        const database = client.db('pilokdb');
        const quizzes = database.collection('Quizzes');
        const allQuizzes = await quizzes.find({}).toArray();
        res.json(allQuizzes);
    } catch (e) {
        res.status(500).send("Error fetching lessons");
        console.error(e);
    }
}

export async function getQuizById(req, res, client) {
    try {
        const quizId = req.params.id; // Assuming the ID is provided as a request parameter
        const database = client.db('pilokdb');
        const quizzes = database.collection('Quizzes');

        // Convert the string ID to ObjectId
        const objectId = new (quizId);

        // Find the lesson by ID
        const quiz = await quizzes.findOne({ _id: objectId });

        if (!quiz) {
            res.status(404).send("Lesson not found");
        } else {
            res.json(quiz);
        }
    } catch (e) {
        res.status(500).send("Error fetching lesson by ID");
        console.error(e);
    }
}