let alerted = false

function toggle_otherstuff() {
    document.getElementById("otherwrapper").toggleAttribute("disabled")
}

function check_width() {
    if (window.innerWidth < 525 && alerted === false) {
        alert("website starts to get kinda messy with this thin of a viewport")
        alerted = true
    }
}