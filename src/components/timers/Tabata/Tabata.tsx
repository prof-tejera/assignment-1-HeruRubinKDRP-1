import React, { useEffect, useState } from 'react';

interface TabataProps {
  tenths: number;
  isActive: boolean;
  workDuration?: number; // in seconds
  restDuration?: number; // in seconds
  rounds?: number;
}

const Tabata: React.FC<TabataProps> = ({
                                         tenths,
                                         isActive,
                                         workDuration = 20,
                                         restDuration = 10,
                                         rounds = 8,
                                       }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [isWorking, setIsWorking] = useState(true);


  useEffect(() => {
    if (currentRound > rounds) {
      // Timer finished
      return;
    }

    const totalDuration = (workDuration + restDuration) * 100; // convert to milliseconds
    const timeInCurrentRound = tenths % (totalDuration * rounds);
    const isCurrentlyWorking = timeInCurrentRound % totalDuration < workDuration * 100; // convert to milliseconds

    setIsWorking(isCurrentlyWorking);

    const newRound = Math.floor(timeInCurrentRound / totalDuration) + 1;
    if (newRound !== currentRound) {
      setCurrentRound(newRound);
    }
  }, [tenths, workDuration, restDuration, rounds, currentRound]);


  const timeInCurrentPeriod = isWorking
    ? tenths % (workDuration * 100) // convert to milliseconds
    : (tenths - workDuration * 100 * currentRound) % (restDuration * 100); // convert to milliseconds

  const timeRemaining = isWorking ? workDuration - timeInCurrentPeriod / 100 : restDuration - timeInCurrentPeriod / 100;

  return (
    <div>
      <h3>Tabata Timer</h3>
      <div>Round: {currentRound}/{rounds}</div>
      <div>Mode: {isWorking ? 'Work' : 'Rest'}</div>
      <div>Time Remaining: {timeRemaining.toFixed(1)}</div>
    </div>
  );
};

export default Tabata;
