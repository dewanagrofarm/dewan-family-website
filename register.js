import {
  ref,
  push,
  set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newMember = push(ref(window.db, "pendingMembers"));

  await set(newMember, {
    name,
    mobile,
    email,
    password,
    status: "pending",
    createdAt: Date.now()
  });

  alert("✅ Registration Successful! আপনার আবেদন জমা হয়েছে।");

  form.reset();
});
