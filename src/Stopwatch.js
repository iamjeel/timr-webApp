import React, { useState, useEffect } from 'react';
import { Wrapper, Button } from './styles';



const Stopwatch = () => {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (active) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active]);

  const handleStart = () => {
    setActive(true);
  };

  const handlePause = () => {
    setActive(false);
  };

  const handleReset = () => {
    setActive(false);
    setTime(0);
  };

  return (
    <Wrapper>
      <div>
        <h2>Stopwatch</h2>
        <p>{time} seconds</p>
        {active ? (
          <Button onClick={handlePause}>Pause</Button>
        ) : (
          <>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handleReset}>Reset</Button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Stopwatch;
