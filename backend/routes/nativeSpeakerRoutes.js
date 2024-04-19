import express from 'express';
import { getAllNativeSpeakers } from '../controllers/nativeSpeakerController.js';
import { getNativeSpeakerById } from '../controllers/nativeSpeakerController.js';

const router = express.Router();

/**
 * Defines routes related to native speakers.
 * @param {object} client - The MongoDB client object.
 * @returns {object} Express router for native speaker routes.
 */
export function nativeSpeakerRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => getAllNativeSpeakers(req, res, client));
    router.get('/:id', (req, res) => getNativeSpeakerById(req, res, client));

    return router;
}
