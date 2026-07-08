import {Get_func} from "./fetch.js"

const data = await Get_func();

function ToString(number: number) {
    let second: number = 0;
    let minute: number = 0;
    let hour: number = 0;
    while (number > 0) {
        if (number >= 60) {
            if (number >= 3600) {
                hour++;
                number -= 3600;
            }
            else {
                minute++;
                number -= 60;
            }
        }
        else {
            second++;
            number--;
        }
    }
    return `${hour.toString().padStart(2, "0")}:
    ${minute.toString().padStart(2, "0")}:
    ${second.toString().padStart(2, "0")}`;
}

function MinTime(): string {
    let min: number = 100000;
    for (let i: number = 0; i < data.length ; ++i) {
        let value: number;
        let seconds: number = parseInt(data[i].progress.slice(10, 12), 10);
        let minutes: number = parseInt(data[i].progress.slice(7, 9), 10);
        let hours: number = parseInt(data[i].progress.slice(4, 6), 10);
        value = (hours * 3600) + (minutes * 60) + seconds;
        if (min > value) min = value;
    }
    return ToString(min);
}

function AverageTime(): string {
    let average: number = 0;
    for (let i: number = 0; i < data.length ; ++i) {
        let seconds: number = parseInt(data[i].progress.slice(10, 12), 10);
        let minutes: number = parseInt(data[i].progress.slice(7, 9), 10);
        let hours: number = parseInt(data[i].progress.slice(4, 6), 10);
        average += (hours * 3600) + (minutes * 60) + seconds;
    }
    average = Math.floor(average / data.length);
    return ToString(average);
}

function MaxTime(): string {
    let max: number = 0;
    for (let i: number = 0; i < data.length ; ++i) {
        let value: number;
        let seconds: number = parseInt(data[i].progress.slice(10, 12), 10);
        let minutes: number = parseInt(data[i].progress.slice(7, 9), 10);
        let hours: number = parseInt(data[i].progress.slice(4, 6), 10);
        value = (hours * 3600) + (minutes * 60) + seconds;
        if (max < value) max = value;
    }
    return ToString(max);
}

export function DrawStat(){
    const data = Get_func();

    const minStat = document.getElementById("min_value") as HTMLElement;
    const averageStat = document.getElementById("average_value") as HTMLElement;
    const maxStat = document.getElementById("max_value") as HTMLElement;

    minStat.innerHTML = MinTime();
    averageStat.innerHTML = AverageTime();
    maxStat.innerHTML = MaxTime();
}