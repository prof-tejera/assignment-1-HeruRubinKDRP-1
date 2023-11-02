import React, { useEffect, useState } from 'react';
import { FormattedTimeDisplay } from "../../generic/TimerDisplays/FormattedTimeDisplay";

interface CountdownProps {
  tenths: number; // Renamed from milliseconds for clarity
  duration: number; // duration in seconds for the countdown

}

const Countdown: React.FC<CountdownProps> = (props : CountdownProps) => {
  const [remainingTime, setRemainingTime] = useState(props.duration * 100); // convert duration to tenths

  useEffect(() => {
    if (props.tenths === 0) {
      // Reset the remaining time when the reset prop is true
      setRemainingTime(props.duration * 100);
    } else {
      // Update the remaining time
      const timeLeft = (props.duration * 100) - props.tenths;
      setRemainingTime(timeLeft > 0 ? timeLeft : 0);
    }
  }, [props.tenths, props.duration]);



  return (
    <div>
      <h3>Countdown Timer</h3>
      <FormattedTimeDisplay tenths={remainingTime} />
    </div>
  );
};

export default Countdown;
