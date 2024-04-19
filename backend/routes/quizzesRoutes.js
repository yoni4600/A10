import express from 'express';
import { getAllQuiezzes } from '../controllers/quizzesController.js';
import { getQuizById } from '../controllers/quizzesController.js';
const router = express.Router();

/**
 * Defines routes related to quizzes.
 * @param {object} client - The MongoDB client object.
 * @returns {object} Express router for quiz routes.
 */
export function quizzesRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllQuiezzes(req, res, client));
    router.get('/:id', (req, res) => getQuizById(req, res, client));

    return router;
}