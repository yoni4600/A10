import express from 'express';
import { loginUser, registerUser, validateToken , updateUserAvailability, logout } from '../controllers/userController.js';

const router = express.Router();

/**
 * Defines routes related to user authentication, registration, and management.
 * @param {object} client - The MongoDB client object.
 * @returns {object} Express router for user routes.
 */
export function userRoutes(client) {
    // Pass the MongoDB client to the controller
    router.post('/login', (req, res) => loginUser(req, res, client));
    router.post('/register', (req, res) => registerUser(req, res, client));
    router.post('/validateToken', (req, res) => validateToken(req, res, client));
    router.post('/updateAvailability', (req, res) => updateUserAvailability(req, res, client));
    router.post('/logout', (req, res) => logout(req, res, client));
    return router;
}
