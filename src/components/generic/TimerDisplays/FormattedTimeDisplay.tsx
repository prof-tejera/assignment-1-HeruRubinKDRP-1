import React from "react";

export interface iNumberCardsClockDisplayProps {
  tenths: number;
}

export const FormattedTimeDisplay=(props : iNumberCardsClockDisplayProps)=>{

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const tenths = Math.floor(time % 100) / 10;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${tenths}`;
  };

  return(
        <div className="time-container" >
          {formatTime(props.tenths)}
        </div>
    )
}
