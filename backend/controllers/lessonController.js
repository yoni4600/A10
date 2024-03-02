export async function getAllLessons(req, res, client) {
    try {
        const database = client.db('pilokdb');
        const lessons = database.collection('Lessons');
        const allLessons = await lessons.find({}).toArray();
        res.json(allLessons);
    } catch (e) {
        res.status(500).send("Error fetching lessons");
        console.error(e);
    }
}