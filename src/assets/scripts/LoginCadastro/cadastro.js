var full_name;
var email;
var password;

var btn_cadastro = document.getElementById('btn_cadastro')
btn_cadastro.addEventListener('click', saveUser);
client = document.getElementById('company');

function saveUser(evt){
     full_name = document.getElementById('name').value;
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;
     confirm_pass = document.getElementById('confirm_pass').value;
 

    if(full_name.length > 6 && email.length > 0){
        if(password.length > 6){
            if(password === confirm_pass){
                user = {
                    full_name: full_name,
                    email: email,
                    password: password
                }
        
                localStorage.setItem('user', JSON.stringify(user))
                alert("Novo usuário criado!")
                if(client.value === 'company'){
                    document.location.href='./edicaodeDados.html'
                }else{
                    document.location.href='./userProfile.html'
                }
            }else{
                alert("As senhas não coincidem")
                evt.preventDefault();
            }
        }else{
            alert("A senha deve ter mais que 6 caracteres")
            evt.preventDefault();
        }        
    }   
    else{
        alert("dados incompletos")
        evt.preventDefault();
    }
}
