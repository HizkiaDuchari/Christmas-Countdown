const daysTemp = document.getElementById("days");
const hoursTemp = document.getElementById("hours");
const minutesTemp = document.getElementById("minutes");
const secondsTemp = document.getElementById("seconds");

const nextEpisode = '25 December 2021';

function countdown(){
    const nextEpisodeDate = new Date(nextEpisode);
    const currentDate = new Date();

    const totalSeconds = (nextEpisodeDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60) % 24;
    const seconds = Math.floor(totalSeconds % 60);
    
    // console.log(days, hours, minutes, seconds);

    daysTemp.innerHTML = days;
    hoursTemp.innerHTML = hours;
    minutesTemp.innerHTML = minutes;
    secondsTemp.innerHTML = seconds;
}

function formatTime(time){
    return time < 10 ? "0${time}" : time;
}

countdown();
setInterval(countdown, 1000);