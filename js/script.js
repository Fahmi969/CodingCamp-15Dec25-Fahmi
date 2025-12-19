document.addEventListener("DOMContentLoaded", function () {
    welcomeMessage();
    document.getElementById("current-time").innerText =
        new Date().toLocaleString();
});

function welcomeMessage() {
    const name = prompt("Please enter your name:");
    document.getElementById("welcome-speech").innerText =
        name && name.trim() !== "" ? name : "Guest";
}

function validateForm() {
    const name = document.getElementById("name-input").value.trim();
    const dob = document.getElementById("dob-input").value;
    const message = document.getElementById("message-input").value.trim();

    const genderInput = document.querySelector(
        'input[name="gender"]:checked'
    );
    const gender = genderInput ? genderInput.value : "";

    if (!name || !dob || !gender || !message) {
        alert("Semua field wajib diisi!");
        return;
    }

    document.getElementById("result-name").innerText = name;
    document.getElementById("result-dob").innerText = dob;
    document.getElementById("result-gender").innerText = gender;
    document.getElementById("result-message").innerText = message;
}
