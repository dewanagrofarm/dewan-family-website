
{
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const familyRef = ref(window.db, "family");

onValue(familyRef, (snapshot) => {
  const data = snapshot.val();
if (!data) {
  document.getElementById("family-list").innerHTML = "<p>কোন সদস্য নেই</p>";
  return;
}
  let html = "<h2>👨‍👩‍👧‍👦 Family Members</h2>";

  for (let id in data) {
    html += `
      <div class="card">
        <h3>${data[id].name}</h3>
        <p>${data[id].details}</p>
      </div>
    `;
  }

  document.getElementById("family-list").innerHTML = html;
});
function setLanguage(lang) {
function setLanguage(lang) {
  const nav = document.querySelectorAll("nav a");
  const btn = document.querySelectorAll(".btn");

  if (lang === "bn") {
    nav[0].textContent = "🏠 হোম";
    nav[1].textContent = "👨‍👩‍👧‍👦 পরিবার";
    nav[2].textContent = "🌳 পরিবার বৃক্ষ";
    nav[3].textContent = "🌾 কৃষি খামার";
    nav[4].textContent = "💰 বিনিয়োগ";
    nav[5].textContent = "🖼️ গ্যালারি";
    nav[6].textContent = "📞 যোগাযোগ";
    nav[7].textContent = "🔑 অ্যাডমিন";

    document.querySelector(".hero h2").textContent =
      "🌿 দেওয়ান পরিবারের ঐতিহ্যে স্বাগতম";

    btn[0].textContent = "👨‍👩‍👧‍👦 পরিবার দেখুন";
    btn[1].textContent = "📖 ইতিহাস পড়ুন";
    btn[2].textContent = "🌳 পরিবার বৃক্ষ";
    btn[3].textContent = "💰 বিনিয়োগ";
  } else {
    nav[0].textContent = "🏠 Home";
    nav[1].textContent = "👨‍👩‍👧‍👦 Family";
    nav[2].textContent = "🌳 Family Tree";
    nav[3].textContent = "🌾 Agro Farm";
    nav[4].textContent = "💰 Investment";
    nav[5].textContent = "🖼️ Gallery";
    nav[6].textContent = "📞 Contact";
    nav[7].textContent = "🔑 Admin";

    document.querySelector(".hero h2").textContent =
      "🌿 Welcome to Dewan Family Heritage";

    btn[0].textContent = "👨‍👩‍👧‍👦 View Family";
    btn[1].textContent = "📖 Read History";
    btn[2].textContent = "🌳 Family Tree";
    btn[3].textContent = "💰 Investment";
  }
}

window.setLanguage = setLanguage;
