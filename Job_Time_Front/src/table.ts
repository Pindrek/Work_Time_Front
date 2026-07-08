import {Get_func} from "./fetch.js"

export async function DrawTable() {
    const data = await Get_func();
    const table = document.getElementById("table");
    if (!table) return;
    table.innerHTML = "";
    data.forEach((workTime: {
        progress_bar: number;
        progress: string;
        date: string;
    }) => {
        table.innerHTML += `
            <tr>
                <th>
                    <div style="width: ${workTime.progress_bar}%; 
                    background-color: ${workTime.progress_bar !== 100 ? "red" : "green"}; height: 100%"></div>
                </th>
                <th>${TimeFormat(workTime.progress)}</th>
                <th>${DateFormat(workTime.date.toString())}</th>
            </tr>
        `;
    })
    return data;
}

function DateFormat(date: string): string {
    let trueDate: string = '';
    trueDate += date.slice(8, 10)
    trueDate += '.';
    trueDate += date.slice(5, 7)
    trueDate += '.';
    trueDate += date.slice(0, 4)
    return trueDate;
}

function TimeFormat(time: string): string {
    let seconds: string = time.slice(10, 12).padStart(2, "0");
    let minutes: string = time.slice(7, 9).padStart(2, "0");
    let hours: string = time.slice(4, 6).padStart(2, "0");
    return `${hours}:${minutes}:${seconds} / 08:00:00`;
}