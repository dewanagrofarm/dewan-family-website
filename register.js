// ======================================
// Dewan Family Heritage
// Registration System v1.0
// ======================================

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // ===== Input =====

    const fullName = document.getElementById("fullName").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const motherName = document.getElementById("motherName").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("gender").value;
    const maritalStatus = document.getElementById("maritalStatus").value;

    const permanentAddress =
        document.getElementById("permanentAddress").value.trim();

    const presentAddress =
        document.getElementById("presentAddress").value.trim();

    const profession =
        document.getElementById("profession").value.trim();

    const bloodGroup =
        document.getElementById("bloodGroup").value;

    const mobile =
        document.getElementById("mobile").value.trim();

    const guardianMobile =
        document.getElementById("guardianMobile").value.trim();

    // ===============================
    // Validation
    // ===============================

    if (
        fullName === "" ||
        fatherName === "" ||
        motherName === "" ||
        birthDate === "" ||
        gender === "" ||
        maritalStatus === "" ||
        permanentAddress === "" ||
        presentAddress === "" ||
        profession === "" ||
        bloodGroup === "" ||
        mobile === ""
    ) {

        alert("অনুগ্রহ করে সকল তথ্য পূরণ করুন।");
        return;

    }

    if (!/^01\d{9}$/.test(mobile)) {

        alert("সঠিক ১১ সংখ্যার মোবাইল নম্বর লিখুন।");
        return;

    }

    if (
        guardianMobile !== "" &&
        !/^01\d{9}$/.test(guardianMobile)
    ) {

        alert("ঘনিষ্ঠজনের মোবাইল নম্বর সঠিক নয়।");
        return;

    }

    alert("✅ সকল তথ্য সঠিক আছে।");

});
