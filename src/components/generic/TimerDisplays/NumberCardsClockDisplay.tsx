import React from "react";


export interface iNumberCardsClockDisplayProps {
    hours: number;
    minutes: number;
    seconds : number;
    tenths : number;
}

export const NumberCardsClockDisplay=(props : iNumberCardsClockDisplayProps)=>{
    return(
        <div className="time-cards-container" >

        </div>
    )
}