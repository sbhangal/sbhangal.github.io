function jobDescToggle(id) {
    let x = document.getElementById(id);
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}
