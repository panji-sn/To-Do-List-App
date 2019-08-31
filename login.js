var userName = document.getElementById("username").value;
var passWord = document.getElementById("password").value; 
var btnLogin = document.getElementById("btnLogin");

var storageUserName = localStorage.getItem("user");
var storagePassWord = localStorage.getItem("pass");
var bool = false;
(function () {
// 
btnLogin.addEventListener("click",function(){
  userName = document.getElementById("username").value;
  passWord = document.getElementById("password").value;
  if (!userName){
    alert("Username tidak boleh kosong !");
  } else if (!passWord){
    alert("Password tidak boleh kosong !");
  } else if (userName != storageUserName){
    alert("username tidak terdaftar !");
  } else if (passWord != storagePassWord){
    alert("password salah !");
  } else {
    // setTimeout(function(){ alert("Selamat datang "+userName); }, 500);
    
    alert("Selamat datang "+userName);
    bool = true;
    location.replace("main.html");
  }
})

})();
