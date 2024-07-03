function updateTimeAndDay() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentDayElement = document.getElementById('currentDay');
    const now = new Date();
    
    const options = { weekday: 'long' };
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(now);
    const currentTime = now.toUTCString().split(' ')[4];

    currentTimeElement.textContent = currentTime;
    currentDayElement.textContent = currentDay;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
