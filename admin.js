
import { db } from "./firebase.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

window.saveData = function () {
  const name = document.getElementById("name").value;
  const details = document.getElementById("details").value;

  push(ref(db, "family"), {
    name: name,
    details: details
  });

  alert("Data Saved Successfully!");
}
import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

window.saveData = function () {
  const name = document.getElementById("name").value;
  const details = document.getElementById("details").value;

  push(ref(window.db, "family"), {
    name: name,
    details: details
  });

  alert("ডাটা সেভ হয়েছে!");
};
import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const pendingRef = ref(window.db, "pendingMembers");

onValue(pendingRef, (snapshot) => {
  const data = snapshot.val();
  const pendingList = document.getElementById("pending-list");

  if (!pendingList) return;

  if (!data) {
    pendingList.innerHTML = "<p>কোন Pending Member নেই</p>";
    return;
  }

  let html = "";

  Object.values(data).forEach((member) => {
    html += `
      <div class="card">
        <h3>${member.name}</h3>
        <p>${member.mobile}</p>
        <p>${member.email}</p>
      </div>
    `;
  });

  pendingList.innerHTML = html;
});
