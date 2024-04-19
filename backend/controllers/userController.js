import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Authenticates a user by checking username and password, then generates a JWT token upon successful login.
 * @param {object} req - The request object containing username and password in the body.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
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
        const token = jwt.sign({ username: user.username, userType: user.userType ,id : user._id}, "blabla", { expiresIn: '1h' });

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

/**
 * Updates the availability status of a user.
 * @param {object} req - The request object containing the updated availability status and username.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function updateUserAvailability(req, res, client) {
    try {
        const { isAvailable, username } = req.body;
        const database = client.db('pilokdb');
        const usersCollection = database.collection('users');
        
        // Update the user's availability status
        await usersCollection.updateOne(
            { username: username }, // Filter by username
            { $set: { isAvailable: isAvailable } } // Update isAvailable field
        );

        return res.json({ success: true, message: 'Availability status updated successfully' });
    } catch (error) {
        console.error('Error updating availability status:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

/**
 * Registers a new user.
 * @param {object} req - The request object containing user details in the body.
 * @param {object} res - The response object.
 * @param {object} client - The MongoDB client object.
 */
export async function registerUser(req, res, client) {
    try {
        const { username, password, userType, country, language, description, zoomLink} = req.body;
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
        let newUser = {
            username,
            password: hashedPassword,
            userType: userType,
            isAvailable: false
        };

        // If user type is "NativeSpeaker", add additional attributes
        if (userType === 'NativeSpeaker') {
            newUser = {
                ...newUser,
                country,
                language,
                description,
                zoomLink
            };
        }
        // Insert the new user into the database
        await usersCollection.insertOne(newUser);

        console.log('New user inserted');
        return res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

/**
 * Middleware function to validate JWT token.
 * @param {object} req - The request object containing the JWT token.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 */
export async function validateToken(req, res, next) {
    // Get token from cookies, headers, or query parameters
    const token = req.headers.authorization;
    if (!token) {
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

export async function logout(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.clearCookie('token'); // Clear the token cookie
    res.sendStatus(200); // Send a success status code
}