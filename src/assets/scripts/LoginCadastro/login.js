var full_name;
var email;
var password;

var btn_login = document.getElementById('btn_login')
btn_login.addEventListener('click', getUser);

function getUser(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(email.length > 0  && email.length > 0 && password.length > 0  && password.length > 0){
    
       var user = JSON.parse(localStorage.getItem('user'))
       
       if(email === user.email){
        if(password === user.password){
            document.location.href = './userProfile.html'
        }else{
            alert("Password invalido")
        }
       }else{
        alert("Email invalido")
       }
    }
    else{
        alert("dados invalidos")
    }

 

    //console.log('user');

}