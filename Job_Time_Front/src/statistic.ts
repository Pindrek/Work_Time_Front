import {Get_func} from "./fetch.js"

const data = await Get_func();

function MinTime(): number {
    let min: number = 100000;
    for (let i: number = 0; i < data.length ; ++i) {
        let value: number;
        let seconds: number = parseInt(data[i].progress.slice(10, 12), 10);
        let minutes: number = parseInt(data[i].progress.slice(7, 9), 10);
        let hours: number = parseInt(data[i].progress.slice(4, 6), 10);
        value = (hours * 3600) + (minutes * 60) + seconds;
        if (min > value) min = value;
    }
    return min;
}

function AverageTime(): number {
    let average: number = 0;
    for (let i: number = 0; i < data.length ; ++i) {
        let seconds: number = parseInt(data[i].progress.slice(10, 12), 10);
        let minutes: number = parseInt(data[i].progress.slice(7, 9), 10);
        let hours: number = parseInt(data[i].progress.slice(4, 6), 10);
        average += (hours * 3600) + (minutes * 60) + seconds;
    }
    average /= data.length;
    return average;
}

function MaxTime(): number {
    let max: number = 0;
    for (let i: number = 0; i < data.length ; ++i) {
        let value: number;
        let seconds: number = parseInt(data[i].progress.slice(10, 12), 10);
        let minutes: number = parseInt(data[i].progress.slice(7, 9), 10);
        let hours: number = parseInt(data[i].progress.slice(4, 6), 10);
        value = (hours * 3600) + (minutes * 60) + seconds;
        if (max < value) max = value;
    }
    return max;
}