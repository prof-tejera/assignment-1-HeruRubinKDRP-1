import React from "react";
import styled from "styled-components";


const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
 
  padding: 20px;
  margin: 10px;
 
`;

const TimerTitle = styled.div``;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Timer /> },
    { title: "Countdown", C: <Timer /> },
    { title: "XY", C: <Timer /> },
    { title: "Tabata", C: <Timer  /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer key={`timer-${timer.title}`}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
};

export default TimersView;
