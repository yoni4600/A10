import express from 'express';
import cors from 'cors'; // Use the ES6 import for cors
import { lessonRoutes } from './routes/lessonRoutes.js';
import { exerciseRoutes } from './routes/exerciseRoutes.js';
import { nativeSpeakerRoutes } from './routes/nativeSpeakerRoutes.js';
import { quizzesRoutes } from './routes/quizzesRoutes.js';
import { userRoutes } from './routes/userRoutes.js';


export function createApp(client) {
    const app = express();

    // Use application-level middleware for common functionality
    app.use(cors());
    app.use(express.json()); // Parse JSON bodies

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