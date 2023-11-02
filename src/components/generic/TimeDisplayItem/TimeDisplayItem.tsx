import {TimeItemStyled} from "./TimeDisplayStyled";
import React from "react";


export interface TimeDisplayItemProps {
    displayNumber : number,
    unitOfTime : string,
    classes : string
}

export const TimeDisplayItem = (props : TimeDisplayItemProps)=>{
    return(
        <TimeItemStyled className={`time-unit-container ${props.classes}`}>
            <div className="time-unit-label">
                {props.unitOfTime}
            </div>
            <div className="time-section-number">
                <div className="number-container">
                    {props.displayNumber}
                </div>
            </div>
        </TimeItemStyled>
    )
}