import express from 'express';
import cors from 'cors'; // Use the ES6 import for cors
import { lessonRoutes } from './routes/lessonRoutes.js';
import { exerciseRoutes } from './routes/exerciseRoutes.js';
import { nativeSpeakerRoutes } from './routes/nativeSpeakerRoutes.js';
import { quizzesRoutes } from './routes/quizzesRoutes.js';
import { userRoutes } from './routes/userRoutes.js';

/**
 * Creates an Express application with defined routes and middleware.
 * @param {object} client - The MongoDB client object.
 * @returns {object} Express application instance.
 */
export function createApp(client) {
    const app = express();

    // Use application-level middleware for common functionality
    app.use(cors({
        origin: ['https://a10-frontend-lac.vercel.app/home'],
        credentials: true // Allow credentials (cookies)
    }));

    app.use(express.json()); // Parse JSON bodies
    
    // Define routes
    app.get('/', (req, res) => {
        res.send('Welcome to Pilok API !');
    });
    app.use('/lessons', cors(), lessonRoutes(client));
    app.use('/exercises', cors(), exerciseRoutes(client))
    app.use('/nativeSpeakers', cors(), nativeSpeakerRoutes(client))
    app.use('/quizzes', cors(), quizzesRoutes(client))
    app.use('/user', cors(), userRoutes(client))

    return app;
}
