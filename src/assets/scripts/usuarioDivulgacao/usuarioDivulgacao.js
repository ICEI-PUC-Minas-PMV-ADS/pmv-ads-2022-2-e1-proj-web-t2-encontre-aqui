

function addCategoria(opcoes_categoria){    
   var company_data = JSON.parse(localStorage.getItem('company_data'))
   if(company_data){
        company_data.categoria = opcoes_categoria.options[opcoes_categoria.selectedIndex].value
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
   
    var horarios = document.querySelectorAll('.horarios input')
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    var ramoProf = document.querySelector('.opcoes');
    var ramo = 'Confeitaria'
    if(company_data.categoria != null && company_data.categoria != ''){
        ramo = company_data.categoria
    }

    ramoProf.innerHTML = `  <select onchange="addCategoria(this)" class="opcao">
                                <option id="opcao" selected disabled>${ramo}</option>
                                <option>Marcenaria</option>
                                <option>Advogado</option>
                                <option>Dentista</option>
                                <option>Pedreiro</option>
                                <option>Restaurante</option>
                                <option>Churrascaria</option>
                                <option>Padaria</option>
                                <option>Pizzaria</option>
                                <option>Petshop</option>
                                <option>Confeitaria</option>
                                <option>Professor Particular</option>
                                <option>Reforma de sofá</option>
                            </select>
                            `;

    for(var i = 0; i < horarios.length; i++){
        horarios[i].addEventListener("change", ()=>{
            addHorarios()
        })
    }

    if(company_data){
       if(company_data.hfunc != null){
        var h = splitHor(company_data.hfunc)
        for(var i =0 ; i < horarios.length; i++){
            horarios[i].value = h[i]
           }
    }
     
    
        var img_avatar = document.querySelectorAll(".img_avatar")
        var user_name = document.getElementById("user_name")
        if(user_name != null && user_name != undefined){
            user_name.innerHTML = company_data.razao_social;
        }
        
    for(var i = 0; i < img_avatar.length; i++){      
        if(company_data.url_img != '' && company_data.url_img != null){
            img_avatar[i].setAttribute('src', company_data.url_img)  
        }else{
            img_avatar[i].setAttribute('src', './assets/images/site/userprofile/avatar.png')  
        }
        
    }
}
   
    
})

function splitHor(horariosLocal){
    horarios = []
    if(horariosLocal != null && horariosLocal != ''){
    for(var i = 0; i < horariosLocal.length; i++){
       let h = horariosLocal[i].split('-');
       horarios.push(h[0])
       horarios.push(h[1])
    }
}
    return horarios
}