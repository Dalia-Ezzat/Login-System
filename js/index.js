// -------- ----------element start -------- //
var emailInputSignIn = document.getElementById("emailInputSignIn");
var passwordInputSignIn = document.getElementById("passwordInputSignIn");
var signInBtn = document.getElementById("signInBtn");
var incorrect = document.getElementById("incorrect");
var inputs = document.querySelectorAll("input");
var showPassword = document.getElementById("showPassword");

// --------------- all variable start -------- //
var usersData = JSON.parse(localStorage.getItem("usersData"));
var pathHome =
   location.href.slice(0, location.href.lastIndexOf("/")) + "/home.html";



// --- ------------signin button
signInBtn.addEventListener("click", function () {
   if (validation()) {
      if (getDataSignip()) {
         location.replace(pathHome);
      } else {
         incorrect.innerHTML =
            ' <span class="text-danger">~ incorrect email or password~</span>';
      }
   } else {
      incorrect.innerHTML =
      '<span class="text-danger mt-5 ">~ All inputs is required ~</span>';
   }
});
// --- -----------show password button
showPassword.addEventListener("click", visaplityPass);

function getDataSignip() {
   var userData = {
      email: emailInputSignIn.value,
      pass: passwordInputSignIn.value,
   };
   return checkUserData(userData);
}
// --- ---------------check user Data------------------
function checkUserData(userData) {
   var check = true;
   for (var i = 0; i < usersData.length; i++) {
      if (
         userData.email == usersData[i].email &&
         userData.pass == usersData[i].pass
      ) {
         localStorage.setItem("session", usersData[i].name );
         check = true;
         break;
      } else {
         check = false;
      }
   }
   return check;
}
// --------------validation--------------
function validation() {
   var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var regexPassword = /^.{3,20}$/;
   if (
      regexEmail.test(emailInputSignIn.value) &&
      regexPassword.test(passwordInputSignIn.value)
   ) {
      return true;
   } else {
      return false;
   }
}
// ---------------- show Password---------------
function visaplityPass() {
   if (passwordInputSignIn.type == "password") {
      passwordInputSignIn.type = "text";
      showPassword.classList.replace("fa-eye", "fa-eye-slash");
   } else {
      passwordInputSignIn.type = "password";
      showPassword.classList.replace("fa-eye-slash", "fa-eye");
   }
}
