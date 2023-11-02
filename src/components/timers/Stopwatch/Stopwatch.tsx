import React from 'react';
import { FormattedTimeDisplay } from "../../generic/TimerDisplays/FormattedTimeDisplay";

interface StopwatchProps {
  tenths: number;  // tenths of a second passed from parent
  duration: number;  // duration in seconds for the stopwatch
}

const Stopwatch: React.FC<StopwatchProps> = ({ tenths, duration }: StopwatchProps) => {

  // Convert the duration to tenths of a second for comparison
  const durationInTenths = duration * 100;

  // Calculate the remaining time in tenths of a second
  const remainingTime = durationInTenths - tenths > 0 ? durationInTenths - tenths : 0;

  return (
    <div>
      <h3>Stopwatch Timer</h3>
      <FormattedTimeDisplay tenths={remainingTime} />
    </div>
  );
};

export default Stopwatch;
