/*sign up*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (fullName.length < 3) {
            alert("Full name must be at least 3 characters.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert("This email is already registered. Please use a different email.");
            return;
        }

        const newUser = {
            fullName: fullName,
            email: email,
            password: password 
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        form.submit(); 
    });
});
