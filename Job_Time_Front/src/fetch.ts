async function post_func() {

}

export function patch_func(progress_: string) {
   // try {
        fetch("http://localhost:8000/core/home/", {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                progress: progress_,
                progress_bar: 100,
            })
        })
   // }
    //catch (error) {
   //     console.error(error);
   // }
}

async function get_func() {

}