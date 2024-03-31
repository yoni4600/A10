import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import cors from 'cors'; // Use the ES6 import for cors
import { lessonRoutes } from './routes/lessonRoutes.js';
import { exerciseRoutes } from './routes/exerciseRoutes.js';
import { nativeSpeakerRoutes } from './routes/nativeSpeakerRoutes.js';
import { quizzesRoutes } from './routes/quizzesRoutes.js';

// Passport session setup.
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Use the GoogleStrategy within Passport.
passport.use(new GoogleStrategy({
    clientID: '681746616905-fodbik2jmmrui8eel5mpdehchvogr2gh.apps.googleusercontent.com', // Replace with your Google Client ID
    clientSecret: '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', // Replace with your Google Client Secret
    callbackURL: 'http://localhost:4000/auth/google/callback' // Replace with your callback URL
  },
  (accessToken, refreshToken, profile, done) => {
    // In a real application, you might save the profile information in a database
    // For this example, the user's Google profile is passed back in the callback
    return done(null, profile);
  }
));

export function createApp(client) {
    const app = express();

    // Use application-level middleware for common functionality
    app.use(cors());
    app.use(express.json()); // Parse JSON bodies

    // Configure session management
    app.use(session({
      secret: 'secretKey', // Replace with a real secret key
      resave: false,
      saveUninitialized: true,
    }));

    // Initialize Passport and restore authentication state, if any, from the session.
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/', (req, res) => {
        res.send('Welcome to Pilok API !');
    });

    // Define routes for Google OAuth
    app.get('/auth/google',
      passport.authenticate('google', { scope: ['profile', 'email'] })
    );

    app.get('/auth/google/callback', 
      passport.authenticate('google', { failureRedirect: '/' }),
      (req, res) => {
        // Successful authentication, redirect home.
        console.log('User authenticated', req.user);
        res.redirect('http://localhost:3000/Home');
      }
    );

    app.use('/lessons', cors(), lessonRoutes(client));
    app.use('/exercises', cors(), exerciseRoutes(client))
    app.use('/nativeSpeakers', cors(), nativeSpeakerRoutes(client))
    app.use('/quizzes', cors(), quizzesRoutes(client))


    return app;
}