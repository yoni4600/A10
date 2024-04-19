import { ObjectId } from 'mongodb';

/**
 * Retrieves all exercises from the MongoDB collection.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getAllExercises(req, res, client) {
    try {
        const database = client.db('pilokdb');
        const Exercise = database.collection('Exercises');
        const allExercises = await Exercise.find({}).toArray();
        
        res.send(allExercises);
    } catch (e) {
        res.status(500).send("Error fetching Exercises");
        console.error(e);
    }
}

/**
 * Retrieves a specific exercise by its ID from the MongoDB collection.
 * @param {object} req - The request object containing the exercise ID.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function getExerciseById(req, res, client) {
    try {
        const exerciseId = req.params.id; // Assuming the ID is provided as a request parameter
        const database = client.db('pilokdb');
        const exercises = database.collection('Exercises');

        // Convert the string ID to ObjectId
        const objectId = new ObjectId(exerciseId);

        // Find the exercise by ID
        const exercise = await exercises.findOne({ _id: objectId });

        if (!exercise) {
            res.status(404).send("Exercise not found");
        } else {
            res.json(exercise);
        }
    } catch (e) {
        res.status(500).send("Error fetching exercise by ID");
        console.error(e);
    }
}