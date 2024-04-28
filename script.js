let timer; // Timer variable
let isRunning = false; // Variable to track if the stopwatch is running
let seconds = 0, minutes = 0, hours = 0;

// Function to start or stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

// Function to update the display
function updateDisplay() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timer);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
}

// Function to format time (add leading zero if needed)
function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}
