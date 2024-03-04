import React from 'react';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lessons from './components/lessons/lessons';
import LessonDetailWrapper from './components/lessons/LessonDetailWrapper';
import { LessonsProvider } from './contexts/lessonContext';

const App = () => {
  return (
    <Router>
      <LessonsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetailWrapper />} />
        </Routes>
      </LessonsProvider>
    </Router>
  );
};

export default App;
