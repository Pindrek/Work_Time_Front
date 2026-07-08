import {Get_func} from "./fetch.js";

const data = await Get_func();
let progress_bar_value: number = data[0].progress_bar;
let time: number = 0;

export function addTime() {
    let second: number = parseInt(data[0].progress.slice(10, 12), 10);
    let minute: number = parseInt(data[0].progress.slice(7, 9), 10);
    let hour: number = parseInt(data[0].progress.slice(4, 6), 10);
    time += (hour * 3600) + (minute * 60) + second;
    return time;
}

export function MathProgress() {

}

export function ProgressBar(): number {
    time++;
    if (progress_bar_value < 100 && time % 216 === 0) progress_bar_value++;
    //if (progress_bar_value >= 100 && progress_bar_value < 200 && time % 72 === 0 && time !== 21600) progress_bar_value++;
    //if (progress_bar_value >= 200 && progress_bar_value < 300 && time % 72 === 0 && time !== 28800) progress_bar_value++;
    //if (progress_bar_value >= 300 && progress_bar_value < 400 && time % 72 === 0 && time !== 36000) progress_bar_value++;
    //if (progress_bar_value >= 400 && progress_bar_value < 500 && time % 108 === 0 && time !== 46800) progress_bar_value++;
    return progress_bar_value;
}