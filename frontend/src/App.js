import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Home></Home>
      </div>
    </Router>
  );
};

export default App;
