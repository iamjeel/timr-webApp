import React from 'react';
import Header from './Header';
import Stopwatch from './Stopwatch';
import Alarm from './Alarm';
import IntervalTimer from './IntervalTimer';

const App = () => {
  return (
    <div>
      <Header />
      <Stopwatch />
      <Alarm />
      <IntervalTimer />
    </div>
  );
};

export default App;
