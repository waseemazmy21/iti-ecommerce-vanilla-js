/*login*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert("Invalid email or password. Please try again.");
            return;
        }

        alert("Login successful!");
        form.submit();
    });
});




