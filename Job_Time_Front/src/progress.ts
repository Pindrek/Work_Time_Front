import {patch_func} from "./fetch.js";

let seconds: number = 0;
let minutes: number = 0;
let hours: number = 0;

let timer: number | null = null;

// async function sendProgress() {
//     try {
//         const response = await fetch('http://localhost:8000/core/home/', {
//             method: 'PATCH',
//             headers: {'content-type': 'application/json'},
//             body: JSON.stringify({
//                 progress: timeToProgress(),
//                 progress_bar: 27,
//             })
//         })
//     }
//     catch (error) {
//         alert("Error:" + error);
//     }
// }

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

export function timeToProgress(): string {
    return `P0DT${hours}H${minutes}M${seconds}S`;
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
startButton?.addEventListener("click", () => {
    console.log("Start");
    if (timer === null) {
        startTimer();
    }
})
stopButton?.addEventListener("click", () => {
    console.log("stop");
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
})