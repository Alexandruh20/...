document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("particle");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (Math.random() * 5 + 3) + "s";
        document.body.appendChild(bubble);
    }
});

function toggleVisibility(id) {
    let table = document.getElementById(id);
    table.classList.toggle("visible");
}

document.getElementById("playMusic").addEventListener("click", function() {
    let audio = document.getElementById("bgMusic");
    if (audio.paused) {
        audio.play();
        this.textContent = "Pause Music";
    } else {
        audio.pause();
        this.textContent = "Play Music";
    }
});
