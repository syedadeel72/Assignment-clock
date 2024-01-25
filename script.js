function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const dateStr = `${year}-${month}-${day}`;
    const timeStr = `${hours}:${minutes}`;

    document.getElementById('date').innerText = dateStr;
    document.getElementById('time').innerText = timeStr;
}

// Initial call to display clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
