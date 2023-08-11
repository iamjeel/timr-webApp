import React, { useState, useEffect } from 'react';
import { Wrapper, Button, Input } from './styles'; // Import the shared style


const Alarm = () => {
  const [time, setTime] = useState(new Date());
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const currentTime = new Date().getTime();
      const alarmTime = time.getTime();

      if (currentTime >= alarmTime) {
        // Trigger alarm action (e.g., play sound or show notification)
        alert('Alarm!');
        setActive(false);
      }
    }
  }, [active, time]);

  const handleSetAlarm = () => {
    setActive(true);
  };

  return (
    <Wrapper>
      <div>
        <h2>Alarm</h2>
        <Input
          type="datetime-local"
          value={time.toISOString().substr(0, 16)}
          onChange={(e) => setTime(new Date(e.target.value))}
        />
        <Button onClick={handleSetAlarm}>Set Alarm</Button>
      </div>
    </Wrapper>
  );
};

export default Alarm;
