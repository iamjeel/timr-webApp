import React, { useState, useEffect } from 'react';
import { Wrapper, Button } from './styles'; // Import the shared style


const IntervalTimer = () => {
  const [active, setActive] = useState(false);
  const [workTime, setWorkTime] = useState(1500); // 25 minutes in seconds
  const [restTime, setRestTime] = useState(300); // 5 minutes in seconds
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (active) {
      interval = setInterval(() => {
        if (count % 2 === 0) {
          setWorkTime((prevTime) => prevTime - 1);
        } else {
          setRestTime((prevTime) => prevTime - 1);
        }

        if (workTime === 0 && restTime === 0) {
          clearInterval(interval);
          setActive(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active, workTime, restTime, count]);

  const handleStartInterval = () => {
    setActive(true);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Wrapper>
      <div>
        <h2>Interval Timer</h2>
        <p>
          {count % 2 === 0 ? 'Work Time' : 'Rest Time'}:{' '}
          {count % 2 === 0 ? workTime : restTime} seconds
        </p>
        {active ? (
          <Button onClick={() => setActive(false)}>Pause Interval</Button>
        ) : (
          <Button onClick={handleStartInterval}>Start Interval</Button>
        )}
      </div>
    </Wrapper>
  );
};

export default IntervalTimer;
