function signIn(){
    var getEmail = document.querySelector("#email")
    var getPassword = document.querySelector("#password")
    if(getEmail == sessionStorage.getItem("Email") && getPassword == sessionStorage.getItem("Password")){
        alert("Successfully Login")
        location.href = "./todoApp";
    }
    else{
        alert("Please login")
        location.href = './SignUp.html'
    }

}
function signUp(){
    var getEmail = document.querySelector("#email")
    var getPassword = document.querySelector("#password")
    sessionStorage.setItem("Email",getEmail.Value)
    sessionStorage.setItem("Password",getPassword.Value)
        alert("Successfully Login")
        location.href = './todoApp.html'
    
}

function back(){
    location.href = './index.html'
}