import { connectToDatabase } from './db.js';
import { createApp } from './app.js';

const port = 4000;

async function main() {
    const client = await connectToDatabase();
    const app = createApp(client);

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);;
    })
}

main().catch(console.error);
