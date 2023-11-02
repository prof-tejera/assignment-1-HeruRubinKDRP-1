import {TimeItemStyled} from "./TimeDisplayStyled";
import React from "react";

export const TimeDisplayItem = ({displayNumber, unitOfTime, classes})=>{
    return(
        <TimeItemStyled className={`time-unit-container ${classes}`}>
            <div className="time-unit-label">
                {unitOfTime}
            </div>
            <div className="time-section-number">
                <div className="number-container">
                    {displayNumber}
                </div>
            </div>
        </TimeItemStyled>
    )
}