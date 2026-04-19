document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        let audio = new Audio("/assets/Audio/Hover.wav");
        audio.play();
    });
});

