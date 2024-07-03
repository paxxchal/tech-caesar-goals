function updateTimeAndDay() {
    const now = new Date();
    
    // Update UTC time
    const utcTimeElement = document.getElementById('utc-time');
    utcTimeElement.textContent = now.toUTCString().split(' ')[4];
    
    // Update current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayElement = document.getElementById('current-day');
    currentDayElement.textContent = days[now.getUTCDay()];
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial update
updateTimeAndDay();