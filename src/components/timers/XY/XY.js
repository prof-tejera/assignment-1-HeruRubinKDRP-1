import {XyStyled} from "./xyStyled";
import {NumberCardsClockDisplay} from "../../generic/TimerDisplays/NumberCardsClockDisplay";
import {getTime} from "../../generic/utilities/get-time";
import {useEffect, useState} from "react";
import {TimeDisplayItem} from "../../generic/TimeDisplayItem/TimeDisplayItem";

const XY = ({milliseconds, useBreaks}) => {
    const [presentationTime, setTime] = useState({
        tenths: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
    });
    const [rounds, setRounds] = useState(1);
    const [roundDuration, setRoundDuration] = useState(0);
    const [breakDuration, setBreakDuration] = useState(0);

    const [currentRound, setCurrentRound] = useState(1);
    const [isBreakRound, setIsBreakRound] = useState(false);

    const [activeInput, setActiveInput] = useState("");

    useEffect(() => {

        if(
            currentRound < rounds
            && (roundDuration * currentRound) - milliseconds <= 0
        ){
            if(!isBreakRound){
                setCurrentRound(currentRound + 1);
            }

            if(useBreaks){
                setIsBreakRound(!isBreakRound);
            }
        }

        let comparisonDuration = (roundDuration * currentRound);

        if(useBreaks && isBreakRound){
            comparisonDuration = (roundDuration * currentRound) + breakDuration;
        }

        setTime(getTime(comparisonDuration - milliseconds))

    }, [roundDuration, milliseconds, currentRound]);

    const handleInputs = (event) => {
        switch (activeInput){
            case "rounds":
                setRounds(event.target.value);
                return;
            case "round-duration":
                setRoundDuration(event.target.value);
                return;
            case "break-duration":
                setBreakDuration(event.target.value);
                return;
        }
    }

    const getBreaks =()=>{
        return(
            <>
                <label htmlFor="break-duration">Break Duration</label>
                <input
                    name="break-duration"
                    value={breakDuration}
                    onChange={handleInputs}
                    onFocus={()=>setActiveInput("break-duration")}
                />
            </>
        )
    }

    const getInputsStandard=()=>{
        return (
            <>
                <label htmlFor="rounds" >Input Number of Rounds</label>
                <input
                    name="rounds"
                    value={rounds}
                    onChange={handleInputs}
                    onFocus={()=>setActiveInput("rounds")}

                />
                <label htmlFor="round-duration">Input Round Duration</label>
                <input
                    name="round-duration"
                    value={roundDuration}
                    onChange={handleInputs}
                    onFocus={()=>setActiveInput("round-duration")}
                />
            </>
        )
    }

    const getBreakMessage =()=>{
        if(isBreakRound){
            return <h3>TAKE A BREAK</h3>
        }
    }

    return(
        <XyStyled classNam="xy-timer-container">
            {getBreakMessage()}
            {getInputsStandard()}
            {getBreaks()}
            <TimeDisplayItem
                unitOfTime={"Rounds"}
                displayNumber={rounds}
            />
            <TimeDisplayItem
                unitOfTime={"Current Round"}
                displayNumber={currentRound}
                />
            <NumberCardsClockDisplay
                hours={presentationTime.hours}
                minutes={presentationTime.minutes}
                seconds={presentationTime.seconds}
                tenths={presentationTime.tenths}
            />
        </XyStyled>
    )
};

export default XY;
