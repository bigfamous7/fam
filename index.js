
let signupBtn = document.getElementById("signupBtn")
let LoginBtn = document.getElementById("loginBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")


loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log In";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
}
