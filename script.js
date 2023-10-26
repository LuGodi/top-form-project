const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);

passwordConfirmationInput.addEventListener("input", (e) => {
  if (e.target.value !== passwordInput.value) {
    passwordInput.classList.add("error");
    passwordConfirmationInput.classList.add("error");
  } else {
    passwordInput.classList.remove("error");
    passwordConfirmationInput.classList.remove("error");
  }
});

console.log(passwordInput);
console.log(passwordConfirmationInput);
