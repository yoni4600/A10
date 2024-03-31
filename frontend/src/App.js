import React from 'react';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lessons from './components/lessons/lessons';
import LessonDetailWrapper from './components/lessons/LessonDetailWrapper';
import { LessonsProvider } from './contexts/lessonContext';
import { ExerciseProvider } from './contexts/exerciseContext';
import Exercises from './components/exercises/exercises';
import ExerciseDetailWrapper from './components/exercises/exerciseDetailWrapper';
import NativeSpeakers from './components/nativeSpeakers/nativeSpeakers';
import { NativeSpeakersProvider } from './contexts/nativeSpeakerContext';
import NativeSpeakerDetailWrapper from './components/nativeSpeakers/NativeSpeakerDetailWrapper';
import QuizDetailWrapper from './components/quizzes/quizDetailWrapper';
import Quizzes from './components/quizzes/quizzes';
import { QuizzesProvider } from './contexts/quizzesContext';

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  // Hook to get the current location
  const location = useLocation();

  return (
    <LessonsProvider>
      <ExerciseProvider>
        <QuizzesProvider>
         <NativeSpeakersProvider >
          {location.pathname !== "/" && <Navbar />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonDetailWrapper />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<ExerciseDetailWrapper />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quizzes/:id" element={<QuizDetailWrapper />} />
            <Route path="/nativeSpeakers" element={<NativeSpeakers />} />
            <Route path="/nativeSpeakers/:id" element={<NativeSpeakerDetailWrapper />} />
          </Routes>
         </NativeSpeakersProvider>
        </QuizzesProvider>
      </ExerciseProvider>
    </LessonsProvider>
  );
};

export default AppWrapper;
