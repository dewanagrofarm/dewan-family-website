// ==========================================
// Dewan Family Heritage
// Install System v2.0
// ==========================================

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

});
