var full_name;
var email;
var password;

var btn_login = document.getElementById('btn_login')
btn_login.addEventListener('click', saveUser());

function saveUser(){
     full_name = document.getElementById('name').value;
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;

 
    if(full_name.length > 0 && email.length > 0 && password.length > 0){
        user = {
            full_name: full_name,
            email: email,
            password: password
        }

        localStorage.setItem('user', JSON.stringify(user))
        alert("usuario salvo")
    }else{
        alert("dados incompletos")
        
    }
}
