var full_name;
var email;
var password;
var msg = document.querySelector('.msg_error');

var btn_cadastro = document.getElementById('btn_cadastro')
btn_cadastro.addEventListener('click', saveUser);


function saveUser(evt){
     client = document.getElementById('company');
     full_name = document.getElementById('name').value;
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;
     confirm_pass = document.getElementById('confirm_pass').value;
     var msg = document.querySelector('.msg_error');

    if(full_name.length > 6 && email.length > 0){
        if(password.length > 6){
            if(password === confirm_pass){
               var user = {
                    full_name: full_name,
                    email: email,
                    password: password
                }
                var sessao = {
                    full_name: full_name,
                    email: email,
                }
                sessionStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('user_data', JSON.stringify(user))
               
                if(client.value === 'company'){
                    document.location.href='./edicaodeDados.html?cliente=empresa'
                }else{
                    document.location.href='./userProfile.html'
                }
            }else{
               
                updateError("As senhas não coincidem!")
                evt.preventDefault();
            }
        }else{
           
            updateError("A senha deve ter mais que 6 caracteres...")
            evt.preventDefault();
        }        
    }   
    else{
       
        updateError("Campos vazios... Preencha todos os campos.")
        evt.preventDefault();
    }
   // msg.classList.add('msg')
}

function updateError(msgMessage){
   
    msg.style.visibility = 'visible'
     msg.innerHTML = msgMessage
    
}
