import { patch_func } from "./fetch.js";
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
export function startTimer() {
    timer = window.setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        patch_func(timeToProgress());
    }, 1000);
}
export function timeToProgress() {
    return `P0DT${hours}H${minutes}M${seconds}S`;
}
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
startButton?.addEventListener("click", () => {
    console.log("Start");
    if (timer === null) {
        startTimer();
    }
});
stopButton?.addEventListener("click", () => {
    console.log("stop");
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
});
//# sourceMappingURL=progress.js.map