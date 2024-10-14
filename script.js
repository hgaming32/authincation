const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const loginForm = document.querySelector("#loginForm");
const emailError = document.querySelector(".usermail");
const passwordError = document.querySelector(".password");
const loginResults = document.querySelector(".login-success");

const validEmails = ["abdullgames@gmail.com", "jibrilUni@gmail.com"];

const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return "Your email should have an '@' in it.";
    }
    return true;
};

const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$/;
    if (!passwordPattern.test(password)) {
        return "Password must be 6-8 characters, with at least one digit and one special character.";
    }
    return true;
};

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailError.textContent = "";
    passwordError.textContent = "";
    loginResults.textContent = "";

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const emailValidationResult = validateEmail(emailValue);
    if (emailValidationResult !== true) {
        emailError.textContent = emailValidationResult;
        
    }

    const passwordValidationResult = validatePassword(passwordValue);
    if (passwordValidationResult !== true) {
        passwordError.textContent = passwordValidationResult;
        
    }

    loginResults.textContent = "Login successful!";
    loginResults.style.color = "green";
});
