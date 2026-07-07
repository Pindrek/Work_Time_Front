import {Get_func} from "./fetch.js";

const data = await Get_func();
let progress_bar_value: number = data[0].progress_bar;
let time: number = 0;

function drawProgressBar() {
    const line = document.createElement("div");
    line.style.width = progress_bar_value + "px";
}

export function ProgressBar(): number {
    time++;
    if (progress_bar_value < 100 && time % 216 === 0) progress_bar_value++;
    if (progress_bar_value >= 100 && progress_bar_value < 200 && time % 72 === 0 && time !== 21600) progress_bar_value++;
    if (progress_bar_value >= 200 && progress_bar_value < 300 && time % 72 === 0 && time !== 28800) progress_bar_value++;
    if (progress_bar_value >= 300 && progress_bar_value < 400 && time % 72 === 0 && time !== 36000) progress_bar_value++;
    if (progress_bar_value >= 400 && progress_bar_value < 500 && time % 108 === 0 && time !== 46800) progress_bar_value++;
    return progress_bar_value;
}