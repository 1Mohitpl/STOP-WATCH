let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let timer = false;

const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("Resetbtn");
const hrElement = document.getElementById("HR");
const minElement = document.getElementById("minitues");
const secElement = document.getElementById("seconds");
const msecElement = document.getElementById("milisceonds");

startTimer = () => {
  if (!timer) {
    timer = setInterval(updateTime, 10);
  }
}

 stopTimer = () => {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
  updateTime();
}

function updateTime() {
    if(timer) {
        msec++;
        if (msec === 100) {
          msec = 0;
          sec++;
        }
        if (sec === 60) {
          sec = 0;
          min++;
        }
        if (min === 60) {
          min = 0;
          hr++;
          sec =0;
        }

    }

  hrElement.textContent = hr < 10 ? "0" + hr : hr;
  minElement.textContent = min < 10 ? "0" + min : min;
  secElement.textContent = sec < 10 ? "0" + sec : sec;
  msecElement.textContent = msec < 10 ? "0" + msec : msec;

}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);