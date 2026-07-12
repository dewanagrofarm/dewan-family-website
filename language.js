// ======================================
// Dewan Family Heritage
// Language System v3.0
// ======================================

const translations = {
  bn: {
    home: "🏠 হোম",
    family: "👨‍👩‍👧‍👦 পরিবার",
    tree: "🌳 পরিবার বৃক্ষ",
    agro: "🌾 কৃষি খামার",
    investment: "💰 বিনিয়োগ",
    gallery: "🖼️ গ্যালারি",
    contact: "📞 যোগাযোগ",
    admin: "🔑 অ্যাডমিন",

    heroTitle: "🌿 দেওয়ান পরিবারের ঐতিহ্যে স্বাগতম",
    heroMain: "Dewan Family Heritage",
    heroText:
      "বাংলাদেশের অন্যতম ঐতিহ্যবাহী দেওয়ান পরিবারের ইতিহাস, বংশবৃক্ষ, কৃষি উদ্যোগ ও ভবিষ্যৎ পরিকল্পনার ডিজিটাল সংরক্ষণ।",

    btnFamily: "👨‍👩‍👧 পরিবার দেখুন",
    btnHistory: "📖 ইতিহাস পড়ুন",
    btnJoin: "👤 Join Dewan Family",
    btnTree: "🌳 Family Tree",
    btnInvestment: "💰 Investment"
  },

  en: {
    home: "🏠 Home",
    family: "👨‍👩‍👧‍👦 Family",
    tree: "🌳 Family Tree",
    agro: "🌾 Agro Farm",
    investment: "💰 Investment",
    gallery: "🖼️ Gallery",
    contact: "📞 Contact",
    admin: "🔑 Admin",

    heroTitle: "🌿 Welcome to Dewan Family Heritage",
    heroMain: "Dewan Family Heritage",
    heroText:
      "Digital preservation of our family history, family tree, agro projects and future vision.",

    btnFamily: "👨‍👩‍👧 View Family",
    btnHistory: "📖 Read History",
    btnJoin: "👤 Join Dewan Family",
    btnTree: "🌳 Family Tree",
    btnInvestment: "💰 Investment"
  }
};
function applyLanguage(lang) {

  localStorage.setItem("language", lang);

  const t = translations[lang];

  // Navigation
  const nav = document.querySelectorAll("nav a");
  if (nav.length >= 8) {
    nav[0].textContent = t.home;
    nav[1].textContent = t.family;
    nav[2].textContent = t.tree;
    nav[3].textContent = t.agro;
    nav[4].textContent = t.investment;
    nav[5].textContent = t.gallery;
    nav[6].textContent = t.contact;
    nav[7].textContent = t.admin;
  }

  // Hero Section
  const heroH2 = document.querySelector(".hero h2");
  if (heroH2) heroH2.textContent = t.heroTitle;

  const heroH1 = document.querySelector(".hero h1");
  if (heroH1) heroH1.textContent = t.heroMain;

  const heroP = document.querySelector(".hero p");
  if (heroP) heroP.textContent = t.heroText;

  // Buttons
  const btn = document.querySelectorAll(".hero .btn");
  if (btn.length >= 5) {
    btn[0].textContent = t.btnFamily;
    btn[1].textContent = t.btnHistory;
    btn[2].textContent = t.btnJoin;
    btn[3].textContent = t.btnTree;
    btn[4].textContent = t.btnInvestment;
  }
}

// Button থেকে কল হবে
window.setLanguage = applyLanguage;

// পেজ চালু হলে আগের ভাষা লোড হবে
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("language") || "bn";
  applyLanguage(saved);
});
// ===============================
// More Sections Translation
// ===============================

function updateMoreSections(lang) {

  // About
  const aboutH2 = document.querySelector(".about h2");
  const aboutP = document.querySelector(".about p");

  if (aboutH2) {
    aboutH2.textContent =
      lang === "bn"
        ? "🌿 About Dewan Family Heritage"
        : "🌿 About Dewan Family Heritage";
  }

  if (aboutP) {
    aboutP.textContent =
      lang === "bn"
        ? "Dewan Family Heritage একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম যেখানে আমাদের পারিবারিক ইতিহাস, বংশবৃক্ষ, কৃষি উদ্যোগ এবং ভবিষ্যৎ পরিকল্পনা সংরক্ষণ করা হবে।"
        : "Dewan Family Heritage is a modern digital platform to preserve family history, genealogy, agro projects and future vision.";
  }

  // Mission
  const mission = document.querySelector(".mission h2");
  if (mission) {
    mission.textContent =
      lang === "bn"
        ? "🎯 লক্ষ্য ও উদ্দেশ্য"
        : "🎯 Mission & Vision";
  }

  // Family Tree
  const tree = document.querySelector(".family-tree h2");
  if (tree) {
    tree.textContent =
      lang === "bn"
        ? "🌳 জীবন্ত পরিবার বৃক্ষ"
        : "🌳 Living Family Tree";
  }

  // History
  const history = document.querySelector(".history h2");
  if (history) {
    history.textContent =
      lang === "bn"
        ? "📖 পারিবারিক ইতিহাস"
        : "📖 Family History";
  }

  // Family
  const family = document.querySelector(".family h2");
  if (family) {
    family.textContent =
      lang === "bn"
        ? "👨‍👩‍👧‍👦 দেওয়ান পরিবার"
        : "👨‍👩‍👧‍👦 Dewan Family";
  }

  // Footer
  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML =
      lang === "bn"
        ? "© ২০২৬ Dewan Family Heritage • সর্বস্বত্ব সংরক্ষিত"
        : "© 2026 Dewan Family Heritage • All Rights Reserved";
  }
}
updateMoreSections(lang);
