const ageClock = document.getElementById("ageClock");
const dyeClock = document.getElementById("dyeClock");
const birthDay = new Date(2000, 8, 13, 0, 47, 0, 0);
const dyeDay = new Date(2014, 7, 20, 0, 0, 0, 0);

const today = Date.now();
dyeClock.innerHTML = Math.floor((today - dyeDay) / (1000*60*60*24))

setInterval(() => {
    let now = Date.now();
    let totalMs = now - birthDay
    let totalSeconds = Math.floor(totalMs / 1000)
    let totalMinutes = Math.floor(totalSeconds / 60)
    let totalHours = Math.floor(totalMinutes / 60)
    let totalDays = Math.floor(totalHours / 24);
    let totalYears = Math.floor(totalDays / 365.25);
    ageClock.innerHTML = "Age: " + totalYears + " years " + Math.round(totalDays % 365.25)
        + " days " + (totalHours % 24) + " hours " + (totalMinutes % 60) + " minutes " + (totalSeconds % 60) + " seconds "
}, 1000);