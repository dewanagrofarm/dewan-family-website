// Splash Screen Final

const splash = document.querySelector(".splash");

setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 1s ease";
}, 5000);

setTimeout(() => {
    window.location.href = "index.html";
}, 6000);
