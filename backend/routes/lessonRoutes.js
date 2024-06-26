import express from 'express';
import { getAllLessons } from '../controllers/lessonController.js';
import { getLessonById } from '../controllers/lessonController.js';

const router = express.Router();

/**
 * Defines routes related to lessons.
 * @param {object} client - The MongoDB client object.
 * @returns {object} Express router for lesson routes.
 */
export function lessonRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllLessons(req, res, client));
    router.get('/:id', (req, res) => getLessonById(req, res, client));

    return router;
}
