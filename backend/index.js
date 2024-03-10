import { connectToDatabase } from './db.js';
import { createApp } from './app.js';

const port = 4000;

async function main() {
    const client = await connectToDatabase();
    const app = createApp(client);

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}

main().catch(console.error);
