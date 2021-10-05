var email = document.getElementById("email").value;
var pw = document.getElementById("password").value;
var successfulyLogin = false;

function loginHandle(){
  if(email.length == 0  && pw.length == 0){
    successfulyLogin = true;
    alert("Successfuly logined!");
  }else{
    alert("Failed to login! Invaild email address or password.");
  }

  successfulyLogin == true ? document.getElementById("loginView").innerHTML = "Logout" : document.getElementById("loginView").innerHTML = "Login";
}