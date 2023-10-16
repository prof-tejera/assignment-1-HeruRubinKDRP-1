import {useEffect, useState} from "react";
import {StopwatchStyled} from "./stopwatch-styled";
import {getTime} from "../../generic/utilities/get-time";
import {NumberCardsClockDisplay} from "../../generic/TimerDisplays/NumberCardsClockDisplay";

const Stopwatch = ({milliseconds}) => {
    const [presentationTime, setTime] =useState({
        tenths : 0,
        seconds : 0,
        minutes : 0,
        hours : 0
    });

    useEffect(()=>setTime(getTime(milliseconds)), [milliseconds]);

    return (
        <StopwatchStyled className="stopwatch-container">
            <NumberCardsClockDisplay
                hours={presentationTime.hours}
                minutes={presentationTime.minutes}
                seconds={presentationTime.seconds}
                tenths={presentationTime.tenths}
            />
        </StopwatchStyled>
    )
};

export default Stopwatch;
