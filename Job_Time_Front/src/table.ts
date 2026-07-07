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
                <th>${workTime.progress_bar}</th>
                <th>${workTime.progress}</th>
                <th>${DateFormat(workTime.date.toString())}</th>
            </tr>
        `;
    })
    return data;
}

function DateFormat(date: string): string {
    let trueDate: string = '';
    for (let i = 8; trueDate.length < 10;) {
        trueDate += date[i]
        if (i >= 5) {
            if (i % 2 === 0 || i === 5) {
                if (i === 6) i = -1;
                i++;
            }
            else {
                i -= 4;
                trueDate += '.';
            }
        }
        else {
            i++;
        }
        if (trueDate.length === 5) {
            trueDate += '.';
        }
    }
    return trueDate;
}