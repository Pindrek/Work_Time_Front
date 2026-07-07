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
                <th>${workTime.date.toString()}</th>
            </tr>
        `;
    })
    return data;
}