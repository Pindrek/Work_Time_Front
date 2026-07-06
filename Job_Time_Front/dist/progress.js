let seconds = 0;
let minutes = 0;
let hours = 0;
async function sendProgress() {
    const response = await fetch('http://localhost:8000/core/home/', {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            progress: timeToProgress(),
            progress_bar: 27,
        })
    });
}
export function startTimer() {
    setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        sendProgress();
    }, 1000);
}
export function timeToProgress() {
    return `P0DT${hours}H${minutes}M${seconds}S`;
}
const startButton = document.getElementById("start");
startButton?.addEventListener("click", () => {
    startTimer();
});
//# sourceMappingURL=progress.js.map