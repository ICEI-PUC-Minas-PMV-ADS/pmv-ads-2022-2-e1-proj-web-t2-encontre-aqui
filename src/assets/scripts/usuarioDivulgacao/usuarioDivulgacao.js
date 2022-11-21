

function addCategoria(opcoes_categoria){    
   var company_data = JSON.parse(localStorage.getItem('company_data'))
   if(company_data){
   company_data.categoria = opcoes_categoria.options[opcoes_categoria.selectedIndex].value.toLowerCase
   localStorage.setItem('company_data', JSON.stringify(company_data))   
   }else{
    window.location.href = './usuarioDivulgacao.html'
   }
}

window.addEventListener('load', ()=>{
    const user = JSON.parse(localStorage.getItem('user')) 
    if(user === null || user === undefined){
        window.location.href = './login.html'
    }
   // var categoria = opcoes_categoria.options[opcoes_categoria.selectedIndex].value
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    if(company_data){
        var img_avatar = document.querySelectorAll(".img_avatar")
        var company_name = document.getElementById("company_name")
       
            company_name.innerHTML = company_data.razao_social;        
      
        
    for(var i = 0; i < img_avatar.length; i++){      
        img_avatar[i].setAttribute('src', company_data.url_img)  
    }
   
    }
})