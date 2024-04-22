import React, { useState, useEffect } from "react";
import { TimerProps } from "../types/gameTypes";

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeOver }) => {
  const [time, setTime] = useState(initialTime);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    if (!timerFinished) {
      const timer = setTimeout(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setTimerFinished(true);
            onTimeOver();
            return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [time, onTimeOver, timerFinished]);

  return <div>Time left: {time} seconds</div>;
};

export default Timer;
