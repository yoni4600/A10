import express from 'express';
import { getAllQuizzes } from '../controllers/quizzesController.js';
import { getQuizById } from '../controllers/quizzesController.js';
const router = express.Router();

export function quizzesRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllQuizzes(req, res, client));
    router.get('/:id', (req, res) => getQuizById(req, res, client));

    return router;
}