import {useEffect, useState} from "react";
import Stopwatch from "../timers/Stopwatch/Stopwatch";
import Countdown from "../timers/Countdown/Countdown";
import XY from "../timers/XY/XY";
import Tabata from "../timers/Tabata/Tabata";


export const timerProperties = {
    timerModes: {
        StopWatch: "StopWatch",
        CountDown: "CountDown",
        XY: "XY",
        Tabata: "Tabata"
    },
    timeUnits: {
        tenthsOfSecond : "tenths",
        seconds : "seconds",
        minutes : "minutes",
        hours : "hours"
    }
}

export const TimerLaunchpad = ({timerType}) => {
    const [timerMode, setTimerMode] = useState(timerType);
    const [currentTime, setCurrentTime] = useState(0);
    const [timeActive, setTimerActive] = useState(false);
    let boo = 0


    const updateTime = () => {
        if (!timeActive) {
            return
        }
        setCurrentTime(currentTime + 100)
    }

    useEffect(()=>{
        let bla = setInterval(() => {
            updateTime();
        }, 100);
        return ()=>clearInterval(bla)
    }, [timeActive, currentTime])


    const resetTimer = async () => {
        await setCurrentTime(0);
    }

    const toggleActivateTime = async () => {
        await setTimerActive(!timeActive)
    }

    const getTimer=()=>{
        switch (timerMode){
            case timerProperties.timerModes.StopWatch:
                return <Stopwatch milliseconds={currentTime} />
            case timerProperties.timerModes.CountDown:
                return <Countdown milliseconds={currentTime} />
            case timerProperties.timerModes.XY:
                return <XY milliseconds={currentTime} useBreaks={false} />
            case timerProperties.timerModes.Tabata:
                return <Tabata milliseconds={currentTime} />
        }
    }

    return (
        <div>
            <button onClick={() => resetTimer()}>reset ddd</button>
            <button onClick={() => toggleActivateTime()}>start/stop</button>
            {getTimer()}
        </div>
    )
}