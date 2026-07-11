import { db } from "./firebase.js";

import {
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// ==========================
// Save Family Member
// ==========================

window.saveData = function () {

  const name = document.getElementById("name").value;
  const details = document.getElementById("details").value;

  if (!name || !details) {
    alert("সব তথ্য পূরণ করুন");
    return;
  }

  push(ref(db, "family"), {
    name,
    details
  });

  alert("✅ Family Member Saved");

  document.getElementById("name").value = "";
  document.getElementById("details").value = "";
};


// ==========================
// Show Pending Members
// ==========================

const pendingList = document.getElementById("pending-list");

if (pendingList) {

  onValue(ref(db, "pendingMembers"), (snapshot) => {

    const data = snapshot.val();

    if (!data) {
      pendingList.innerHTML = "<p>কোন Pending Member নেই</p>";
      return;
    }

    let html = "";

    Object.entries(data).forEach(([id, member]) => {

      html += `
      <div class="card">
        <h3>${member.name}</h3>

        <p>📱 ${member.mobile}</p>

        <p>📧 ${member.email}</p>

        <p>📌 ${member.status}</p>
      </div>
      `;

    });

    pendingList.innerHTML = html;

  });

}
