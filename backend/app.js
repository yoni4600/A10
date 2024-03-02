import express from 'express';
import { lessonRoutes } from './routes/lessonRoutes.js';
import { exerciseRoutes } from './routes/exerciseRoutes.js';
import cors from 'cors'; // Use the ES6 import for cors

export function createApp(client) {
    const app = express();
    app.use(cors())


    // Use the userRoutes and pass the MongoDB client
    app.use('/lessons', cors(), lessonRoutes(client));
    app.use('/exercises', cors(), exerciseRoutes(client))
    return app;
}
