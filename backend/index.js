import { connectToDatabase } from './db.js';
import { createApp } from './app.js';

const port = 4000;

/**
 * Initializes the server by connecting to the database and starting the Express application.
 */
async function main() {
    // Connect to the database
    const client = await connectToDatabase();

    // Create the Express application
    const app = createApp(client);

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);;
    })
}

main().catch(console.error);
