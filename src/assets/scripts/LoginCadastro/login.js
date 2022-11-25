var full_name;
var email;
var password;

var btn_login = document.getElementById('btn_login')
btn_login.addEventListener('click', getUser);
var msg = document.querySelector('.msg_error');

function getUser(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(email.length > 0  && email.length > 0 && password.length > 0  && password.length > 0){
    
       var user = JSON.parse(localStorage.getItem('user'))
       
       if(email === user.email){
        if(password === user.password){
            document.location.href = './userProfile.html'
        }else{
            updateError("Password invalido")
            evt.preventDefault();
        }
       }else{
        updateError("Email invalido")
        evt.preventDefault();
       }
    }
    else{
        updateError("dados invalidos")
        evt.preventDefault();
    }
 

}

function updateError(msgMessage){
   
    msg.style.visibility = 'visible'
     msg.innerHTML = msgMessage
    
}
