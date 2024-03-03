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