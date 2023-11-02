import React, { useEffect, useState } from 'react';
import { FormattedTimeDisplay } from "../../generic/TimerDisplays/FormattedTimeDisplay";

interface XYProps {
  tenths: number;  // tenths of a second passed from parent
  duration: number;  // duration in seconds for each round
  rounds: number;  // total number of rounds
}

const XY: React.FC<XYProps> = (props : XYProps) => {
  const [remainingTime, setRemainingTime] = useState(props.duration * 100);  // convert duration to tenths

  useEffect(() => {
    if (props.tenths === 0) {
      // Reset the remaining time when the reset prop is true
      setRemainingTime(props.duration * 100);
    } else {
      // Update the remaining time
      const timeLeft = (props.duration * 100) - (props.tenths % (props.duration * 100));
      setRemainingTime(timeLeft > 0 ? timeLeft : 0);
    }
  }, [props.tenths, props.duration]);

  const currentRound = Math.floor(props.tenths / (props.duration * 100)) + 1;

  return (
    <div>
      <h3>XY Timer</h3>
      Round {currentRound} of {props.rounds}<br />
      <FormattedTimeDisplay tenths={remainingTime} />
    </div>
  );
};

export default XY;
