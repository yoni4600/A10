import express from 'express';
import { lessonRoutes } from './routes/lessonRoutes.js';
import { exerciseRoutes } from './routes/exerciseRoutes.js';
export function createApp(client) {
    const app = express();

    // Use the userRoutes and pass the MongoDB client
    app.use('/lessons', lessonRoutes(client));
    app.use('/exercises', exerciseRoutes(client))
    return app;
}
