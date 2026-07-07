interface WorkTime {
    id?: number;
    progress: string;
    progress_bar: number;
    date: string;
}

async function Post_func() {

}

export function Patch_func(progress_: string, progress_bar_: number) {
    fetch("http://localhost:8000/core/home/", {
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            progress: progress_,
            progress_bar: progress_bar_,
        })
    })
}

export async function Get_func() {
    const response = await fetch("http://localhost:8000/core/home/", {
        method: "GET",
    })
        .then(res => res.json())
    const data: Array<WorkTime> = response.json();
    return data;
}