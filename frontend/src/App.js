import React from 'react';
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
import Quizzes from './components/quizzes/quiz';
import ConnectSpeakers from './components/connectSpeakers/connectSpeakers';
const App = () => {
  return (
    <Router>
      <LessonsProvider>
        <ExerciseProvider >
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonDetailWrapper />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<ExerciseDetailWrapper />} />
            <Route path="/quiezzes" element={<Quizzes />} />
            <Route path="/ConnectSpeakers" element={<ConnectSpeakers />} />
          </Routes>
        </ExerciseProvider>
      </LessonsProvider>
    </Router>
  );
};

export default App;
