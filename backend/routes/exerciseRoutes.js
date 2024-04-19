import express from 'express';
import { getAllExercises, getExerciseById } from '../controllers/exerciseController.js';

const router = express.Router();

/**
 * Defines routes related to exercises.
 * @param {object} client - The MongoDB client object.
 * @returns {object} Express router for exercise routes.
 */
export function exerciseRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllExercises(req, res, client));
    router.get('/:id', (req, res) => getExerciseById(req, res, client));

    return router;
}
