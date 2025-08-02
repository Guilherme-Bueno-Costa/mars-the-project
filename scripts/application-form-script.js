// Declaração de variaveis
const emailInput = document.querySelector("[data-email]");
const emailConfirmationInput = document.querySelector(
  "[data-email-confirmation]"
);
const passwordInput = document.querySelector("[data-password]");
const passwordConfirmationInput = document.querySelector(
  "[data-password-confirmation]"
);

const formRowEmail = document.querySelector("[data-form-email]");
const formRowEmailConfirmation = document.querySelector(
  "[data-form-email-confirmation]"
);
const formRowPassword = document.querySelector("[data-form-password]");
const formRowPasswordConfirmation = document.querySelector(
  "[data-form-password-confirmation]"
);
const form = document.querySelector("form");
const submitButton = document.querySelector("[data-submit-button]");

// Validação de campos
const showMessage = (formRowElement, message) => {
  const small = formRowElement.querySelector("small");

  if (small) small.innerText = message;
};

const checkEmails = () => {
  const emailValue = emailInput.value.trim();
  const emailConfirmationValue = emailConfirmationInput.value.trim();

  // Validação do email
  if (emailValue !== emailConfirmationValue) {
    formRowEmail.classList.remove("checked");
    formRowEmailConfirmation.classList.remove("checked");
    formRowEmail.classList.add("error");
    formRowEmailConfirmation.classList.add("error");

    showMessage(formRowEmail, "Emails do not match");
    showMessage(formRowEmailConfirmation, "Emails does not match");
  } else if (emailValue === "" && emailConfirmationValue === "") {
    formRowEmail.classList.remove("checked");
    formRowEmail.classList.remove("error");
    formRowEmailConfirmation.classList.remove("checked");
    formRowEmailConfirmation.classList.remove("error");
  } else {
    formRowEmail.classList.remove("error");
    formRowEmail.classList.add("checked");
    formRowEmailConfirmation.classList.remove("error");
    formRowEmailConfirmation.classList.add("checked");

    showMessage(formRowEmail, "Emails check");
    showMessage(formRowEmailConfirmation, "Emails check");
  }
};

const checkPassword = () => {
  const passwordValue = passwordInput.value.trim();
  const passwordConfirmationValue = passwordConfirmationInput.value.trim();

  // Validação da senha
  if (passwordValue !== passwordConfirmationValue) {
    formRowPassword.classList.remove("checked");
    formRowPassword.classList.add("error");
    formRowPasswordConfirmation.classList.remove("checked");
    formRowPasswordConfirmation.classList.add("error");

    showMessage(formRowPassword, "Password does not match");
    showMessage(formRowPasswordConfirmation, "Password does not match");
  } else if (passwordValue === "" && passwordConfirmationValue === "") {
    formRowPassword.classList.remove("checked");
    formRowPassword.classList.remove("error");
    formRowPasswordConfirmation.classList.remove("checked");
    formRowPasswordConfirmation.classList.remove("error");
  } else {
    formRowPassword.classList.remove("error");
    formRowPassword.classList.add("checked");
    formRowPasswordConfirmation.classList.remove("error");
    formRowPasswordConfirmation.classList.add("checked");

    showMessage(formRowPassword, "Password check");
    showMessage(formRowPasswordConfirmation, "Password check");
  }
};

emailInput.addEventListener("input", () => {
  checkEmails();
});

emailConfirmationInput.addEventListener("input", () => {
  checkEmails();
});

passwordInput.addEventListener("input", () => {
  checkPassword();
});

passwordConfirmationInput.addEventListener("input", () => {
  checkPassword();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmails();
  checkPassword();

  const isValid =
    formRowEmail.classList.contains("checked") &&
    formRowEmailConfirmation.classList.contains("checked") &&
    formRowPassword.classList.contains("checked") &&
    formRowPasswordConfirmation.classList.contains("checked");

  if (isValid) {
    form.submit();
  } else {
    alert("Please, fill out all the fields!");
  }
});
