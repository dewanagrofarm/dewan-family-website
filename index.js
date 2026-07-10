import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const familyRef = ref(window.db, "family");

onValue(familyRef, (snapshot) => {
  const data = snapshot.val();

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
