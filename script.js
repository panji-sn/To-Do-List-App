var body = document.body;
var parentBody = body.children;

var userName = document.getElementById("username").value;
var passWord = document.getElementById("password").value;
var conPassWord = document.getElementById("conPassword").value;
var eMail = document.getElementById("email").value;
var conEMail = document.getElementById("conEmail").value;
// //console.log(userName)
var btnRegister = document.getElementById("btnRegister");
//console.log(userName)
var bool = false;
(function () {
  btnRegister.addEventListener("click",function(){
  userName = document.getElementById("username").value;
  passWord = document.getElementById("password").value;
  conPassWord = document.getElementById("conPassword").value;
  eMail = document.getElementById("email").value;
  conEMail = document.getElementById("conEmail").value;

  if (!userName){
    alert("username tidak boleh kosong !");
    return false;
  } else if (!passWord){
    alert("password tidak boleh kosong !");
    return false;
  } else if (!conPassword){
    alert("Konfirmasi Password tidak boleh kosong !");
    return false;
  } else if (!eMail){
    alert("Email tidak boleh kosong !");
    return false;
  } else if (!conEMail){
    alert("Email Konfirmasi tidak boleh kosong !");
    return false;
  } else if (passWord !== conPassWord){
    alert("Konfirmasi Password tidak sama dengan Password !");
    return false;
  } else if (eMail !== conEMail){
    alert("Konfirmasi e-Mail tidak sama dengan e-Mail !");
    return false;
  } else {
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("user", userName);
        localStorage.setItem("pass",passWord);
  // Retrieve
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    alert("Registrasi berhasil !");
    bool = true; 
    
  }
  if (bool){
      location.replace("login.html"); 
    }
})

})();

