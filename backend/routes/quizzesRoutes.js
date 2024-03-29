import express from 'express';
import { getAllQuiezzes } from '../controllers/quizzesController.js';

const router = express.Router();

export function quizzesRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllQuiezzes(req, res, client));
    router.get('/:id', (req, res) => getQuizById(req, res, client));

    return router;
}