import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Header from './Header';
import Stopwatch from './Stopwatch';
import Alarm from './Alarm';
import IntervalTimer from './IntervalTimer';
import Home from './Home'
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/intervaltimer" element={<IntervalTimer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
