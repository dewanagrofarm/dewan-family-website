
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

  if (lang === "bn"){
    document.querySelectorAll("nav a")[0].innerHTML = "🏠 Home";
document.querySelectorAll("nav a")[1].innerHTML = "👪 Family";
document.querySelectorAll("nav a")[2].innerHTML = "🌳 Family Tree";
document.querySelectorAll("nav a")[3].innerHTML = "🌾 Agro Farm";
document.querySelectorAll("nav a")[4].innerHTML = "💰 Investment";
document.querySelectorAll("nav a")[5].innerHTML = "🖼 Gallery";
document.querySelectorAll("nav a")[6].innerHTML = "📞 Contact";
document.querySelectorAll("nav a")[7].innerHTML = "🔑 Admin";
document.querySelectorAll("nav a")[0].innerHTML = "🏠 হোম";
document.querySelectorAll("nav a")[1].innerHTML = "👨‍👩‍👧‍👦 পরিবার";
document.querySelectorAll("nav a")[2].innerHTML = "🌳 পরিবার বৃক্ষ";
document.querySelectorAll("nav a")[3].innerHTML = "🌾 কৃষি খামার";
document.querySelectorAll("nav a")[4].innerHTML = "💰 বিনিয়োগ";
document.querySelectorAll("nav a")[5].innerHTML = "🖼️ গ্যালারি";
document.querySelectorAll("nav a")[0].innerHTML = "🏠 Home";
document.querySelectorAll("nav a")[1].innerHTML = "👨‍👩‍👧‍👦 Family";
document.querySelectorAll("nav a")[2].innerHTML = "🌳 Family Tree";
document.querySelectorAll("nav a")[3].innerHTML = "🌾 Agro Farm";
document.querySelectorAll("nav a")[4].innerHTML = "💰 Investment";
document.querySelectorAll("nav a")[5].innerHTML = "🖼️ Gallery";
document.querySelectorAll("nav a")[6].innerHTML = "📞 Contact";
document.querySelectorAll("nav a")[7].innerHTML = "🔑 Admin";
   document.querySelectorAll("nav a")[6].innerHTML = "📞 যোগাযোগ";
document.querySelectorAll("nav a")[7].innerHTML = "🔑 অ্যাডমিন";
    document.querySelector(".hero h2").innerHTML = "🌿 দেওয়ান পরিবারের ঐতিহ্যে স্বাগতম";
    document.querySelector(".hero p").innerHTML =
      "বাংলাদেশের অন্যতম ঐতিহ্যবাহী দেওয়ান পরিবারের ইতিহাস, বংশবৃক্ষ, কৃষি উদ্যোগ ও ভবিষ্যৎ পরিকল্পনার ডিজিটাল সংরক্ষণ।";
  }
document.querySelectorAll("nav a")[0].innerHTML = "🏠 Home";
document.querySelectorAll("nav a")[1].innerHTML = "👪 Family";
document.querySelectorAll("nav a")[2].innerHTML = "🌳 Family Tree";
document.querySelectorAll("nav a")[3].innerHTML = "🌾 Agro Farm";
document.querySelectorAll("nav a")[4].innerHTML = "💰 Investment";
document.querySelectorAll("nav a")[5].innerHTML = "🖼 Gallery";
document.querySelectorAll("nav a")[6].innerHTML = "📞 Contact";
document.querySelectorAll("nav a")[7].innerHTML = "🔑 Admin";
  if (lang === "en") {
    document.querySelector(".hero h2").innerHTML = "🌿 Welcome to Dewan Family Heritage";
    document.querySelector(".hero p").innerHTML =
      "Digital preservation of the history, family tree, agro initiatives and future vision of the Dewan Family.";
document.querySelectorAll(".btn")[0].innerHTML = "👪 View Family";
document.querySelectorAll(".btn")[1].innerHTML = "📖 Read History";
document.querySelectorAll(".btn")[2].innerHTML = "🌳 Family Tree";
document.querySelectorAll(".btn")[3].innerHTML = "💰 Investment";
  }

}
window.setLanguage = setLanguage;
