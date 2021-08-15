document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  console.log(userEmail);
  const passwordForm = document.getElementById("user-password");
  const userPassword = passwordForm.value;
  console.log(userPassword);

  if (userEmail == "abc@gmail.com" && userPassword == "123") {
    // console.log("the user is valid");
    window.location.href = "/banking.html";
  }
});
