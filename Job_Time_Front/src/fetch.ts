interface WorkTime {
    id?: number;
    progress: string;
    progress_bar: number;
    date: string;
}

export async function Post_func() {
    fetch("http://localhost:8000/core/home/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            progress: "P0DT00H00M00S",
            progress_bar: 0,
        })
    });
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
    const data: WorkTime[] = await response.json();
    return data;
}