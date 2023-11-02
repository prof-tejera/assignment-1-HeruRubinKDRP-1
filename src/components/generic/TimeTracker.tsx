import React, { useState, useEffect } from 'react';
import Stopwatch from "../timers/Stopwatch/Stopwatch";
import Countdown from "../timers/Countdown/Countdown";
import Tabata from "../timers/Tabata/Tabata";
import XY from "../timers/XY/XY";
import { TimerStyled } from "./TimetrackerStyled";

export const timerTypes = {
    stopwatch:"stopwatch",
    countdown: "countdown",
    xy :"xy",
    tabata: "tabata"
}

export type TimerType = 'stopwatch' | 'countdown' | 'xy' | 'tabata';
export interface TimerProps {
    type: TimerType;
    duration?: number;
    rounds?: number;
    workTime?: number;
    restTime?: number;
}

const TimeTracker = (props:TimerProps) => {
    //Global states
    const [type, setType] = useState<TimerType>(props.type);
    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    //Tabata states
    const [workDuration, setWorkDuration] = useState<number>(props.workTime || 20);
    const [restDuration, setRestDuration] = useState<number>(props.restTime || 10);
    const [tabataRounds, setTabataRounds] = useState<number>(props.rounds || 8);

    //stopWatch states
    const [stopwatchDuration, setStopwatchDuration] = useState<number>(props.duration || 11);

    //Countdown states
    const [countdownDuration, setCountdownDuration] = useState<number>(props.duration || 11);

    //XY states
    const [xyDuration, setXYDuration] = useState<number>(props.duration || 11);
    const [xyRounds, setXYRounds] = useState<number>(props.rounds || 4);

    useEffect(() => {
        let interval: number | NodeJS.Timeout | undefined;

        const startInterval = () => {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 100);
        };

        if (isActive) {
            if (props.type === 'stopwatch') {
                startInterval();
            }
            // Other timer types will be handled here
        } else if (interval !== undefined) {
            clearInterval(interval as any);
        }

        return () => {
            if (interval !== undefined) {
                clearInterval(interval as any);
            }
        };
    }, [isActive, props.type]);


    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };
    const renderTimerControls = () => {
        switch (type) {
            case 'stopwatch':
                return (
                  <div>
                      <label>Duration: </label>
                      <input
                        type="number"
                        value={stopwatchDuration}
                        onChange={(e) => setStopwatchDuration(Number(e.target.value))}
                      /> seconds
                  </div>
                );
            case 'countdown':
                return (
                  <div>
                      <label>Duration: </label>
                      <input
                        type="number"
                        value={countdownDuration}
                        onChange={(e) => setCountdownDuration(Number(e.target.value))}
                      /> seconds
                  </div>
                );
            case 'xy':
                return (
                  <div>
                      <label>Duration: </label>
                      <input
                        type="number"
                        value={xyDuration}
                        onChange={(e) => setXYDuration(Number(e.target.value))}
                      /> seconds
                      <label>Rounds: </label>
                      <input
                        type="number"
                        value={xyRounds}
                        onChange={(e) => setXYRounds(Number(e.target.value))}
                      />
                  </div>
                );
            case 'tabata':
                return (
                  <div>
                      <label>Work Duration: </label>
                      <input
                        type="number"
                        value={workDuration}
                        onChange={(e) => setWorkDuration(Number(e.target.value))}
                      /> seconds
                      <label>Rest Duration: </label>
                      <input
                        type="number"
                        value={restDuration}
                        onChange={(e) => setRestDuration(Number(e.target.value))}
                      /> seconds
                      <label>Rounds: </label>
                      <input
                        type="number"
                        value={tabataRounds}
                        onChange={(e) => setTabataRounds(Number(e.target.value))}
                      />
                  </div>
                );
            default:
                return null;
        }
    };


    const renderTimerComponent = (tenths : number, activeState : boolean) => {
        switch (type) {
            case 'stopwatch':
                return <Stopwatch duration={stopwatchDuration} tenths={tenths} />;
            case 'countdown':
                return <Countdown duration={countdownDuration} tenths={tenths} />;
            case 'xy':
                return <XY rounds={xyRounds}  duration={xyDuration} tenths={tenths} />;
            case 'tabata':
                return (
                  <Tabata
                    tenths={tenths}
                    isActive={activeState}
                    rounds={tabataRounds}
                    workDuration={workDuration}
                  />
                )
            default:
                return null;
        }
    };

    return (
      <TimerStyled>
          <div>
              <button onClick={()=>setType("stopwatch")}>Stopwatch</button>
              <button onClick={()=>setType("countdown")}>Countdown</button>
              <button onClick={()=>setType("xy")}>XY</button>
              <button onClick={()=>setType("tabata")}>Tabata</button>
          </div>
          {/*<div>{formatTime(time)}</div>*/}
          {renderTimerComponent(time, isActive)}
          <div className="controls-container">
              <button onClick={handleStart}>Start</button>
              <button onClick={handlePause}>Pause</button>
              <button onClick={handleReset}>Reset</button>
              {renderTimerControls()}
          </div>
      </TimerStyled>
    );
};

export default TimeTracker;
