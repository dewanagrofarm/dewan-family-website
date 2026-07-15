// ======================================
// Dewan Family Heritage
// Registration System v2.0
// ======================================

// Firebase Import
import { db } from "./firebase.js";

import {
  ref,
  push,
  set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Form
const form = document.getElementById("registerForm");
// ===============================
// Registration Submit
// ===============================

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    // Personal Information
    const fullName = document.getElementById("fullName").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const motherName = document.getElementById("motherName").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("gender").value;
    const maritalStatus = document.getElementById("maritalStatus").value;

    // Address
    const permanentAddress = document.getElementById("permanentAddress").value.trim();
    const presentAddress = document.getElementById("presentAddress").value.trim();

    // Other Information
    const profession = document.getElementById("profession").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;

    // Contact
    const mobile = document.getElementById("mobile").value.trim();
    const guardianMobile = document.getElementById("guardianMobile").value.trim();

    // Photo
    const profilePhoto = document.getElementById("profilePhoto").files[0];

    // ===============================
    // Validation
    // ===============================

    if (
        !fullName ||
        !fatherName ||
        !motherName ||
        !birthDate ||
        !gender ||
        !maritalStatus ||
        !permanentAddress ||
        !presentAddress ||
        !profession ||
        !bloodGroup ||
        !mobile
    ) {
        alert("অনুগ্রহ করে সকল তথ্য পূরণ করুন।");
        return;
    }

    if (!/^01\d{9}$/.test(mobile)) {
        alert("সঠিক মোবাইল নম্বর লিখুন।");
        return;
    }

    if (
        guardianMobile &&
        !/^01\d{9}$/.test(guardianMobile)
    ) {
        alert("ঘনিষ্ঠজনের মোবাইল নম্বর সঠিক নয়।");
        return;
    }
        // ===============================
    // Save to Firebase Database
    // ===============================

    try {

        const memberRef = push(ref(db, "registrations"));

        await set(memberRef, {

            id: memberRef.key,

            fullName,
            fatherName,
            motherName,
            birthDate,
            gender,
            maritalStatus,

            permanentAddress,
            presentAddress,

            profession,
            bloodGroup,

            mobile,
            guardianMobile,

            profilePhoto: "",

            status: "Pending",

            createdAt: new Date().toISOString()

        });

        alert("✅ আবেদন সফলভাবে জমা হয়েছে।");

        form.reset();

    } catch (error) {

        console.error(error);

        alert("❌ আবেদন জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");

    }

});
