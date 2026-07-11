
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const params = new URLSearchParams(window.location.search);
const memberId = params.get("id");

if (memberId) {
  const memberRef = ref(window.db, "family/" + memberId);

  onValue(memberRef, (snapshot) => {
    const member = snapshot.val();

    if (!member) return;

    document.getElementById("name").textContent = member.name || "";
    document.getElementById("mobile").textContent = member.mobile || "";
    document.getElementById("email").textContent = member.email || "";
    document.getElementById("status").textContent = member.status || "";
  });
}
