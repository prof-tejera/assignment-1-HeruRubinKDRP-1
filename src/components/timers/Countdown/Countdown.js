import {getTime} from "../../generic/utilities/get-time";
import {useEffect, useState} from "react";
import {CountdownStyled} from "./countdown-styled";
import {NumberCardsClockDisplay} from "../../generic/TimerDisplays/NumberCardsClockDisplay";

const Countdown = ({milliseconds}) => {
    const [presentationTime, setTime] = useState({
        tenths: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
    });
    const [targetValue, setTargetValue] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => setTime(getTime( targetValue - milliseconds)), [targetValue, milliseconds]);

    const handleChange =(event)=>{
        setTargetValue(event.target.value)
    }

    const getMenu =(isOpen)=>{
        if(!isOpen){return}

        return(
            <div>
                <input value={targetValue} onChange={handleChange}/>
            </div>
        )
    }

    return (
        <CountdownStyled className="countdown-timer-container">
            <button onClick={()=>setMenuOpen(!menuOpen)}>Set Target Time</button>
            {getMenu(menuOpen)}
            {targetValue}
            <NumberCardsClockDisplay
                hours={presentationTime.hours}
                minutes={presentationTime.minutes}
                seconds={presentationTime.seconds}
                tenths={presentationTime.tenths}
            />
        </CountdownStyled>
    )
};

export default Countdown;
