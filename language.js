// ==========================================
// Dewan Family Heritage
// Language System v2.0
// ==========================================

const translations = {};

function setLanguage(lang) {
    localStorage.setItem("language", lang);
}

window.setLanguage = setLanguage;
