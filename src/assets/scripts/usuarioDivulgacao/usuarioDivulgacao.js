

window.addEventListener('load', ()=>{
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    if(company_data){
        var img_avatar = document.querySelectorAll(".img_avatar")
        document.getElementById("company_name").innerHTML = company_data.razao_social;
        
    for(var i = 0; i < img_avatar.length; i++){      
        img_avatar[i].setAttribute('src', company_data.url_img)  
    }
   
    }
})