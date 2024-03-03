export async function findUserById(req, res, client) {
    try {
        const database = client.db('pilokdb');
        const users = database.collection('users');
        const query = { id: 123 }; // Example query, adjust as needed
        const user = await users.findOne(query);
        
        if (user) {
            res.send(`User name: ${user.name}`);
        } else {
            res.send("User not found");
        }
    } catch (e) {
        res.status(500).send("Error fetching user");
        console.error(e);
    }
}