

function addCategoria(opcoes_categoria){    
   var company_data = JSON.parse(localStorage.getItem('company_data'))
   if(company_data){
   company_data.categoria = opcoes_categoria.options[opcoes_categoria.selectedIndex].value.toLowerCase
   localStorage.setItem('company_data', JSON.stringify(company_data))   
   }else{
    alert("company_data null") //<--
   }
}

window.addEventListener('load', ()=>{
   // var categoria = opcoes_categoria.options[opcoes_categoria.selectedIndex].value
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    if(company_data){
        var img_avatar = document.querySelectorAll(".img_avatar")
        document.getElementById("company_name").innerHTML = company_data.razao_social;
        
    for(var i = 0; i < img_avatar.length; i++){      
        img_avatar[i].setAttribute('src', company_data.url_img)  
    }
   
    }
})