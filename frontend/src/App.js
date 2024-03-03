import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lessons from './components/lessons/lessons'
import { LessonsProvider } from './contexts/lessonContext'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <LessonsProvider>
          <Navbar />
          <Lessons />
        </LessonsProvider>
      </div>
    </Router>
  );
};

export default App;
