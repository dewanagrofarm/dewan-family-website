import {
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

  if (lang === "bn") {
    document.querySelector(".hero h2").innerHTML = "🌿 দেওয়ান পরিবারের ঐতিহ্যে স্বাগতম";
    document.querySelector(".hero p").innerHTML =
      "বাংলাদেশের অন্যতম ঐতিহ্যবাহী দেওয়ান পরিবারের ইতিহাস, বংশবৃক্ষ, কৃষি উদ্যোগ ও ভবিষ্যৎ পরিকল্পনার ডিজিটাল সংরক্ষণ।";
  }

  if (lang === "en") {
    document.querySelector(".hero h2").innerHTML = "🌿 Welcome to Dewan Family Heritage";
    document.querySelector(".hero p").innerHTML =
      "Digital preservation of the history, family tree, agro initiatives and future vision of the Dewan Family.";
  }

}
window.setLanguage = setLanguage;
