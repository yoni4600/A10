import express from 'express';
import { getAllExercises, getExerciseById } from '../controllers/exerciseController.js';

const router = express.Router();

export function exerciseRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllExercises(req, res, client));
    router.get('/:id', (req, res) => getExerciseById(req, res, client));

    return router;
}
