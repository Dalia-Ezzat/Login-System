// -------- element start -------- //
var sayHello = document.getElementById("sayHello");
var logOutBtn = document.getElementById("logOutBtn");


// -------- all variable start -------- //
var logInPage =
   location.href.slice(0, location.href.lastIndexOf("/")) + "/home.html";


logOutBtn.addEventListener("click", logOut);


(function () {
   sayHello.innerHTML = `Welcome ${localStorage.getItem("session")}`;
})();
function logOut() {
   localStorage.removeItem("session");
   location.replace(logInPage);
}







