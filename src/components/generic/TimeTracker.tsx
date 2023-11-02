import React, { useState, useEffect } from 'react';

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
    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        let interval: number;

        if (isActive) {
            if (props.type === 'stopwatch') {
                interval = setInterval(() => {
                    setTime((prevTime) => prevTime + 1);
                }, 1000);
            }
            // Other timer types will be handled here
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
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

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
      <div>
          <div>{formatTime(time)}</div>
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
      </div>
    );
};

export default TimeTracker;
