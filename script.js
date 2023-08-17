const pass1 = document.getElementById("password");
const pass2 = document.getElementById("re-password");
const password_feedback = document.getElementById("password_feedback");

pass2.addEventListener("input", comparePassword);

function comparePassword(e) {
  if (pass1.value === pass2.value) {
    password_feedback.textContent = "All Good!";
    password_feedback.classList.remove("error");
  } else {
    password_feedback.textContent = "Password does not match";
    password_feedback.classList.add("error");
  }
}
