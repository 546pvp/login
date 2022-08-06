
var usernameElement = document.getElementsByClassName("username")[0]
var passwordElement = document.getElementsByClassName("password")[0]
var loginElement = document.getElementById("login")
var submitBtn = document.getElementById("submitBtn")
submitBtn.onclick = function() {
    if(usernameElement.value == "tuna" && passwordElement.value == "pizza") {
        window.location = 'https://546pvp.github.io/shop/'
    } 
    if(usernameElement.value !== "tuna")   {
        usernameElement.style.border = '2px solid red'
        document.getElementsByClassName('baduser')[0].style.color = 'red'
        usernameElement.value = ''
    }
    if(passwordElement.value !== "pizza")   {
        passwordElement.style.border = '2px solid red'
        document.getElementsByClassName('badpass')[0].style.color = 'red'
        passwordElement.value = ''
    }
    
    
    /* This code will change border every time the username will be good onsubmit
    if(usernameElement.value == "tuna") {
        usernameElement.style.border = '0px solid red'
        document.getElementsByClassName('baduser')[0].style.color = 'transparent'
    }
        */



    
}
document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    if (name == 'Enter' && code == 'Enter') {
        document.getElementById("submitBtn").click()
    }
}, false)