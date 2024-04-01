import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export async function loginUser(req, res, client) {
    try {
        const { username, password } = req.body;
        const database = client.db('pilokdb');
        const usersCollection = database.collection('users');

        // Find user by username
        const user = await usersCollection.findOne({ username });

        if (!user) {
            return res.status(401).json({ success: false, error: 'Invalid username or password' });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ success: false, error: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ username: user.username, userType: user.userType }, "blabla", { expiresIn: '1h' });

        res.cookie('token', token);
        if (req.body.rememberMe) {
            res.cookie('username', username);
            res.cookie('password', username);
        }

        return res.json({ success: true, message: 'Logged in successfully', token: token});
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

export async function registerUser(req, res, client) {
    try {
        const { username, password, userType } = req.body;
        console.log('User logged in successfully');
        const database = client.db('pilokdb');
        const usersCollection = database.collection('users');

        // Check if the username is already taken
        const existingUser = await usersCollection.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = {
            username,
            password: hashedPassword,
            userType: userType
        };

        // Insert the new user into the database
        await usersCollection.insertOne(newUser);

        console.log('New user inserted');
        return res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

export async function validateToken(req, res, next) {
    // Get token from cookies, headers, or query parameters
    const token = req.headers.authorization;
    if (!token) {
        console.log("no token ", token)
        return res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
    }
    // Extract token from "Bearer <token>"
    const tokenParts = token.split(' ');
    const jwtToken = tokenParts[1];

    // Verify token
    jwt.verify(jwtToken, 'blabla', (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, error: 'Forbidden: Invalid token' });
        } else {
            // Token is valid, add decoded token to request object for further use
            req.user = decoded;
            return res.status(200).json({success: true, error: 'token is valid'})
        }
    });
}
