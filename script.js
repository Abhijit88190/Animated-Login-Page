document.addEventListener("DOMContentLoaded", () => {
    let currentCaptcha = "";

    // Generate and display captcha
    function generateCaptcha() {
        const captchaBox = document.getElementById("captcha-box");
        currentCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate a 6-character alphanumeric code
        captchaBox.textContent = currentCaptcha; // Display captcha
    }

    // Refresh captcha
    document.getElementById("refresh-captcha").addEventListener("click", (event) => {
        event.preventDefault();
        generateCaptcha();
    });

    // Form validation
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const captchaInput = document.getElementById("captcha-input");
        const termsCheckbox = document.getElementById("terms");

        // Validate email
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.trim().length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        // Validate captcha
        if (captchaInput.value.trim() !== currentCaptcha) {
            alert("Captcha does not match. Please try again.");
            isValid = false;
        }

        // Validate terms and conditions
        if (!termsCheckbox.checked) {
            alert("You must agree to the terms and conditions.");
            isValid = false;
        }

        // Submit the form if all validations pass
        if (isValid) {
            alert("Login successful!");
            form.reset(); // Reset the form
            generateCaptcha(); // Generate a new captcha
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Initialize the captcha on page load
    generateCaptcha();
});
