import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Family List
const familyRef = ref(window.db, "family");

onValue(familyRef, (snapshot) => {
  const data = snapshot.val();
  const familyList = document.getElementById("family-list");

  if (!data) {
    familyList.innerHTML = "<p>কোন সদস্য নেই</p>";
    return;
  }

  let html = "<h2>👨‍👩‍👧‍👦 Family Members</h2>";

  Object.values(data).forEach((member) => {
    html += `
      <div class="card">
        <h3>${member.name}</h3>
        <p>${member.details}</p>
      </div>
    `;
  });

  familyList.innerHTML = html;
});function setLanguage(lang) {

  function setLanguage(lang) {

  const nav = document.querySelectorAll("nav a");
  const heroTitle = document.querySelector(".hero h2");
  const heroText = document.querySelector(".hero p");
  const btn = document.querySelectorAll(".btn");

  if (lang === "bn") {

    nav[0].textContent = "🏠 হোম";
    nav[1].textContent = "👪 পরিবার";
    nav[2].textContent = "🌳 পরিবার বৃক্ষ";
    nav[3].textContent = "🌾 কৃষি খামার";
    nav[4].textContent = "💰 বিনিয়োগ";
    nav[5].textContent = "🖼️ গ্যালারি";
    nav[6].textContent = "📞 যোগাযোগ";
    nav[7].textContent = "🔑 অ্যাডমিন";

    heroTitle.textContent = "🌿 দেওয়ান পরিবারের ঐতিহ্যে স্বাগতম";
    heroText.textContent =
      "বাংলাদেশের অন্যতম ঐতিহাসিক দেওয়ান পরিবারের ইতিহাস, বংশধারা, কৃষি খামার ও ভবিষ্যৎ পরিকল্পনার ডিজিটাল সংরক্ষণ।";

    btn[0].textContent = "👪 পরিবার দেখুন";
    btn[1].textContent = "📖 ইতিহাস পড়ুন";
    btn[2].textContent = "🌳 পরিবার বৃক্ষ";
    btn[3].textContent = "💰 বিনিয়োগ";

  } else {

    nav[0].textContent = "🏠 Home";
    nav[1].textContent = "👪 Family";
    nav[2].textContent = "🌳 Family Tree";
    nav[3].textContent = "🌾 Agro Farm";
    nav[4].textContent = "💰 Investment";
    nav[5].textContent = "🖼️ Gallery";
    nav[6].textContent = "📞 Contact";
    nav[7].textContent = "🔑 Admin";

    heroTitle.textContent = "🌿 Welcome to Dewan Family Heritage";
    heroText.textContent =
      "Digital preservation of the history, family tree, agro farm and future vision of Dewan Family.";

    btn[0].textContent = "👪 View Family";
    btn[1].textContent = "📖 Read History";
    btn[2].textContent = "🌳 Family Tree";
    btn[3].textContent = "💰 Investment";
  }

  document.querySelector(".about h2").textContent =
    lang === "bn"
      ? "🌿 দেওয়ান পরিবার পরিচিতি"
      : "🌿 About Dewan Family Heritage";

  document.querySelector(".history h2").textContent =
    lang === "bn"
      ? "📖 পরিবারের ইতিহাস"
      : "📖 Family History";

  document.querySelector(".family h2").textContent =
    lang === "bn"
      ? "👪 দেওয়ান পরিবার"
      : "👪 Dewan Family";
}

window.setLanguage = setLanguage;
