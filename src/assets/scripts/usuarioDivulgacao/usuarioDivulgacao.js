

function addCategoria(opcoes_categoria){    
   var company_data = JSON.parse(localStorage.getItem('company_data'))
   if(company_data){
   company_data.categoria = opcoes_categoria.options[opcoes_categoria.selectedIndex].value.toLowerCase
   localStorage.setItem('company_data', JSON.stringify(company_data))   
   }else{
    window.location.href = './usuarioDivulgacao.html'
   }
}

function addHorarios(){
    var hfunc = [];
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    var horarios = document.querySelectorAll('.horarios input')
    
    for(var i = 0; i < (horarios.length); i++){
        if(i % 2 == 0)
             hfunc.push(joinHorarios(horarios[i].value, horarios[i+1].value))
    }
   
    company_data.hfunc = hfunc
    localStorage.setItem('company_data', JSON.stringify(company_data))   
}

function joinHorarios(inicio, fim){
    return `${inicio}-${fim}`
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
        var user_name = document.getElementById("user_name")
        if(user_name != null && user_name != undefined){
            user_name.innerHTML = company_data.razao_social;
        }
        
    for(var i = 0; i < img_avatar.length; i++){      
        img_avatar[i].setAttribute('src', company_data.url_img)  
    }
   
    }
})