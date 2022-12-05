function recoverPassword(e){
    var user = JSON.parse(localStorage.getItem("user_data"))
    var password = document.getElementById("userPassword").value;
    var password_c = document.getElementById("userPassword_confirm").value;
  
    if(user){

        if(password.length > 6){
            if(password == password_c){
                user.password = password;              
                updateError("Senha Alterada com sucesso")
                setTimeout(()=>{
                    window.location.href="./login.html";
                },2000)
            } else{
                updateError("Os campos não coincidem...")
                e.preventDefault();
            }

        }else{
            updateError("A senha deve ter pelo menos 7 caracteres...")
            e.preventDefault();
        } 
            
       
    }else{
        updateError("Não foi possivel alterar a senha com estes dados...")
        e.preventDefault();
    }
  
}


function updateError(msgMessage){
    var msg = document.querySelector('.msg_error');
    msg.style.visibility = 'visible'
     msg.innerHTML = msgMessage
    
}
