import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch/Stopwatch";
import Countdown from "../components/timers/Countdown/Countdown";
import XY from "../components/timers/XY/XY";
import Tabata from "../components/timers/Tabata/Tabata";
import {TimerLaunchpad, timerProperties} from "../components/generic/TimerLaunchpad";

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
    { title: "Stopwatch", C: <TimerLaunchpad timerType={timerProperties.timerModes.StopWatch} /> },
    { title: "Countdown", C: <TimerLaunchpad timerType={timerProperties.timerModes.CountDown} /> },
    { title: "XY", C: <TimerLaunchpad timerType={timerProperties.timerModes.XY} /> },
    { title: "Tabata", C: <TimerLaunchpad timerType={timerProperties.timerModes.Tabata} /> },
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
