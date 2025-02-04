let alerted = false

function toggle_otherstuff() {
    document.getElementsByClassName("otherwrapper")[0].toggleAttribute("disabled")
}

function check_width() {
    if (window.innerWidth < 325 && alerted === false) {
        alert("website gets kinda messy with this thin of a screen")
        alerted = true
    }
}

function parallaxScroll() {
    document.documentElement.style.backgroundPositionY = `${window.scrollY * 0.8}px`
}

document.getElementById('enableParallax').addEventListener('change', (event) => {
    if (!event.target.checked) {
        removeEventListener("scroll", parallaxScroll);
    } else {
        addEventListener("scroll", parallaxScroll);
    }
  });
if (document.getElementById('enableParallax').checked) {addEventListener("scroll", parallaxScroll);}