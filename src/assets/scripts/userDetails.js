window.addEventListener('load', ()=>{
    var user = JSON.parse(sessionStorage.getItem('user'))        
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    var user_name = document.getElementById("user_name")

    if(user){
        user_name.innerHTML = `Olá, ${user.full_name}`;
    }
    
    if(company_data){
            var img_avatar = document.querySelector(".img_avatar")
           
            if(user)
                 user_name.innerHTML =  `Olá, ${company_data.razao_social}`;
            if(img_avatar){
                img_avatar.setAttribute('src', company_data.url_img)
            }
            
    }else{
         url_img.value ='./assets/images/site/userprofile/avatar.png'
    }

})