
var user_name = document.getElementById('user_name')
var user_auth = JSON.parse(sessionStorage.getItem('user'))
var url_img = document.getElementById('url_img')
var old_company_data = JSON.parse(localStorage.getItem('company_data'))

    if(user_auth === null || user_auth === undefined){
        window.location.href = './login.html'
    }
 
function saveData(){
    var dataForm = document.querySelectorAll('#form input')
    var descricaoArea = document.getElementById('descricao') 
    if(url_img.value == "" || url_img.value == null){
        url_img.value = "./assets/images/site/userprofile/avatar.png"
    }
    var categoria = 'Eletricista'
    if(old_company_data){
        categoria = old_company_data.categoria
    }

    var company_data = {}
    if(dataForm.length > 9){
        company_data = {
            url_img: url_img.value, 
            razao_social:dataForm[0].value,
            cnpj: dataForm[1].value,
            logradouro: dataForm[4].value,
            bairro: dataForm[5].value,
            cep: dataForm[6].value,
            email: dataForm[3].value,
            inscricaoEstadual: dataForm[2].value,
            cidade: dataForm[7].value,
            uf: dataForm[8].value,
            tel: dataForm[9].value,
            descricao:descricaoArea.value,
            categoria: categoria   
        }
    }else{
        company_data = {
            url_img: url_img.value, 
            razao_social:dataForm[0].value,           
            logradouro: dataForm[2].value,
            bairro: dataForm[3].value,
            cep: dataForm[4].value,
            email: dataForm[1].value,
            inscricaoEstadual: dataForm[2].value,
            cidade: dataForm[5].value,
            uf: dataForm[6].value,            
            descricao:descricaoArea.value,
                
    }

}
  
    localStorage.setItem('company_data', JSON.stringify(company_data))
  
}