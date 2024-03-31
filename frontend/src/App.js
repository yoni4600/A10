import React from 'react';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lessons from './components/lessons/lessons';
import LessonDetailWrapper from './components/lessons/LessonDetailWrapper';
import { LessonsProvider } from './contexts/lessonContext';
import LessonDetail from './components/lessons/LessonDetail';
import { ExerciseProvider } from './contexts/exerciseContext';
import Exercises from './components/exercises/exercises';
import ExerciseDetailWrapper from './components/exercises/exerciseDetailWrapper';
import Quizzes from './components/quizzes/quizz';
import NativeSpeakers from './components/nativeSpeakers/nativeSpeakers';
import { NativeSpeakersProvider } from './contexts/nativeSpeakerContext';
import NativeSpeakerDetailWrapper from './components/nativeSpeakers/NativeSpeakerDetailWrapper';

const App = () => {
  return (
    <Router>
      <LessonsProvider>
        <ExerciseProvider >
          <NativeSpeakersProvider >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:id" element={<LessonDetailWrapper />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/exercises/:id" element={<ExerciseDetailWrapper />} />
              <Route path="/quiezzes" element={<Quizzes />} />
              <Route path="/nativeSpeakers" element={<NativeSpeakers />} />
              <Route path="/nativeSpeakers/:id" element={<NativeSpeakerDetailWrapper />} />
            </Routes>
            </NativeSpeakersProvider>
        </ExerciseProvider>
      </LessonsProvider>
    </Router>
  );
};

export default App;
