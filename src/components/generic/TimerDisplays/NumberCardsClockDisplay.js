import {TimeDisplayItem} from "../TimeDisplayItem/TimeDisplayItem";
import {timerProperties} from "../TimerLaunchpad";

export const NumberCardsClockDisplay=({hours, minutes, seconds, tenths})=>{
    return(
        <div className="time-cards-container" >
            <TimeDisplayItem
                displayNumber={hours}
                unitOfTime={timerProperties.timeUnits.hours}
                classes="time-display"
            />
            <TimeDisplayItem
                displayNumber={minutes}
                unitOfTime={timerProperties.timeUnits.minutes}
                classes="time-display"
            />
            <TimeDisplayItem
                displayNumber={seconds}
                unitOfTime={timerProperties.timeUnits.seconds}
                classes="time-display"
            />
            <TimeDisplayItem
                displayNumber={tenths}
                unitOfTime={timerProperties.timeUnits.tenthsOfSecond}
                classes="time-display"
            />
        </div>
    )
}