// fetching html elements:
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
// timer will hold the interval id of setInterval to update the timer
let isRunning = false;
// isRunning will keep track of the stopwatch, if running(true) else(false)
let seconds = 0;
// seconds will store the number of seconds passed on the stopwatch

function displayTime() {
    // calculates the minutes and seconds from the total 'seconds'
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
    //  format them as a string in MM:SS format:
  const formattedTime = `${padZero(minutes)}:${padZero(secs)}`;
  timerDisplay.textContent = formattedTime;
}

function padZero(value) {
    //it takes a numeric value, converts it to a string, and pads it with leading zeros if the string length is less than 2
  return value.toString().padStart(2, '0');
    //it ensures that the minutes and seconds values always have two digits in the display   
}

function startTimer() {
    // it checks if the stopwatch is not already running (!isRunning). If it's not running, it sets isRunning to true, starts the timer using setInterval, and increments the seconds variable every second. It also calls the displayTime() function to update the display.
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      displayTime();
    }, 1000);
  }
}

function stopTimer() {
    // it checks if the stopwatch is running (isRunning). If its running, it stops the timer using clearInterval and sets isRunning to false.
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function resetTimer() {
    // it calls the stopTimer() function to stop the timer if it's running. Then, it resets the seconds variable to 0 and updates the display using displayTime() function. 
  stopTimer();
  seconds = 0;
  displayTime();
}

// finally we added the event listeners to their respective functions:
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
