const form = document.getElementById("userForm"); const 
nameInput = document.getElementById("name"); const 
emailInput = document.getElementById("email"); const 
passwordInput = document.getElementById("password");  
form.addEventListener("submit", (e) => {  
e.preventDefault();   
validateInputs();  
});   
function validateInputs() {  
const nameValue = nameInput.value.trim();   const 
emailValue = emailInput.value.trim();   const 
passwordValue = passwordInput.value.trim();  
// Name Validation   if 
(nameValue === "") {  
setError(nameInput, "Name is required");   
} else if (nameValue.length < 3) {  
setError(nameInput, "Name must be at least 3 characters");  
} else {  
setSuccess(nameInput);  
}  
// Email Validation   if 
(emailValue === "") {  
setError(emailInput, "Email is required");  
} else if (!isValidEmail(emailValue)) {  
setError(emailInput, "Enter a valid email address");  
} else {  
setSuccess(emailInput);  
}  
// Password Validation   if 
(passwordValue === "") {  
setError(passwordInput, "Password is required");  
} else if (passwordValue.length < 6) {  
setError(passwordInput, "Password must be at least 6 characters");  
} else {  
setSuccess(passwordInput);  
}  
}  
// Helper Functions  
function setError(input, message) {   const formGroup 
= input.parentElement;   const errorMsg = 
formGroup.querySelector(".error");   
errorMsg.textContent = message;   
input.style.borderColor = "red";  
}   
function setSuccess(input) {   const formGroup = 
input.parentElement;   const errorMsg = 
formGroup.querySelector(".error");   
errorMsg.textContent = "";   input.style.borderColor 
= "green";  
}   
function isValidEmail(email) {  
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); } 
