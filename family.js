import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const familyRef = ref(window.db, "family");

onValue(familyRef, (snapshot) => {
  const data = snapshot.val();
  const familyList = document.getElementById("familyList");

  if (!data) {
    familyList.innerHTML = "<p>কোন সদস্য নেই</p>";
    return;
  }

  let html = "";

  Object.entries(data).forEach(([id, member]) => {
    html += `
      <div class="card">
        <h2>${member.name}</h2>
        <p>📞 ${member.mobile || ""}</p>
        <p>📧 ${member.email || ""}</p>
        <p>📌 ${member.status || ""}</p>

        <a href="profile.html?id=${id}">
          <button>👤 View Profile</button>
        </a>
      </div>
    `;
  });

  familyList.innerHTML = html;
});
