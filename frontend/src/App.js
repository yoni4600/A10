import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lessons from './components/lessons/lessons';
import LessonDetailWrapper from './components/lessons/LessonDetailWrapper';
import { LessonsProvider } from './contexts/lessonContext';
import { ExerciseProvider } from './contexts/exerciseContext';
import Exercises from './components/exercises/exercises';
import ExerciseDetailWrapper from './components/exercises/exerciseDetailWrapper';
import QuizDetailWrapper from './components/quizzes/quizDetailWrapper';
import Quizzes from './components/quizzes/quizzes';
import { QuizzesProvider } from './contexts/quizzesContext';
import Register from './components/auth/register';
import LoginRoute from './components/auth/login';
import { PrivateRoute } from './components/auth/privateRoute';
import { useCookies } from 'react-cookie';
import { validateToken } from './services/authService';
import DarkModeToggle from './components/darkMode/Toggle';
import { NativeSpeakersProvider } from './contexts/nativeSpeakerContext';
import NativeSpeakers from './components/nativeSpeakers/nativeSpeakers';
import NativeSpeakerDetailWrapper from './components/nativeSpeakers/NativeSpeakerDetailWrapper';

const App = () => {
  const [cookies] = useCookies(['token']);
  const [authenticated, setAuthenticated] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const tokenValid = await validateToken(cookies.token);
        setAuthenticated(tokenValid);
      } catch (error) {
        console.error('Error validating token:', error);
        setAuthenticated(false);
      }
    };

    if (cookies.token) {
      checkTokenValidity();
    } else {
      setAuthenticated(false);
    }
  }, [cookies.token]);

  return (
    <Router>
      <NativeSpeakersProvider>
        <LessonsProvider>
          <ExerciseProvider >
            <QuizzesProvider>
            <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<PrivateRoute isLoggedIn={authenticated}><Home /></PrivateRoute>} />
              <Route path="/lessons" element={<PrivateRoute isLoggedIn={authenticated}><Lessons /></PrivateRoute>} />
              <Route path="/lessons/:id" element={<PrivateRoute isLoggedIn={authenticated}><LessonDetailWrapper /></PrivateRoute>} />
              <Route path="/exercises" element={<PrivateRoute isLoggedIn={authenticated}><Exercises /></PrivateRoute>} />
              <Route path="/exercises/:id" element={<PrivateRoute isLoggedIn={authenticated}><ExerciseDetailWrapper /></PrivateRoute>} />
              <Route path="/quiezzes" element={<PrivateRoute isLoggedIn={authenticated}><Quizzes /></PrivateRoute>} />
              <Route path="/quizzes/:id" element={<PrivateRoute isLoggedIn={authenticated}><QuizDetailWrapper /></PrivateRoute>} />
              <Route path="/nativeSpeakers" element={<PrivateRoute isLoggedIn={authenticated}><NativeSpeakers /></PrivateRoute>} />
              <Route path="/nativeSpeakers/:id" element={<PrivateRoute isLoggedIn={authenticated}><NativeSpeakerDetailWrapper /></PrivateRoute>} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginRoute />} />
            </Routes>
            </QuizzesProvider>
          </ExerciseProvider>
        </LessonsProvider>
      </NativeSpeakersProvider>
    </Router>
  );
};

export default App;
