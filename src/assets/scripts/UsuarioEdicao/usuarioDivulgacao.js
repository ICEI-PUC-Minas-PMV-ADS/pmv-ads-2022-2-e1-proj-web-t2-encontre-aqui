
var user_name = document.getElementById('user_name')
var user_auth = JSON.parse(localStorage.getItem('user'))
var url_img = document.getElementById('url_img')
 
    if(user_auth === null || user_auth === undefined){
        window.location.href = './login.html'
    }

function saveData(){
    var dataForm = document.querySelectorAll('#form input')
    var descricaoArea = document.getElementById('descricao') 
    
    var company_data = {
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
        telefone: dataForm[9].value,
        descricao:descricaoArea.value,
        categoria: ''      
    }
    console.log(company_data)
    localStorage.setItem('company_data', JSON.stringify(company_data))
  
}