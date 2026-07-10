
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
