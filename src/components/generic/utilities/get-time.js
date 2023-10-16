export const getTime =(milliseconds)=>{
    let scratchTime = {
        tenths : 0,
        seconds : 0,
        minutes : 0,
        hours : 0
    }

    scratchTime.tenths = (milliseconds % 1000) / 10;
    scratchTime.seconds = Math.floor((milliseconds - scratchTime.tenths)/1000) ;
    scratchTime.minutes = Math.floor(scratchTime.seconds / 60) ;
    scratchTime.hours = Math.floor(scratchTime.minutes / 60)

    scratchTime.seconds = scratchTime.seconds % 60;
    scratchTime.minutes = scratchTime.minutes % 60;
    scratchTime.hours = scratchTime.hours % 60;

    return(scratchTime)

}