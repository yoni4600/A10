import express from 'express';
import { findUserById } from '../controllers/userController.js';

const router = express.Router();

export function userRoutes(client) {
    // Pass the MongoDB client to the controller
    router.get('/', (req, res) => findUserById(req, res, client));

    return router;
}
