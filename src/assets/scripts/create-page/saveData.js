var btn_visualization = document.getElementById("btn_visualization");

btn_visualization.addEventListener('click', () =>{
    var url_img_pr = document.getElementById("url_img_pr");
    var url_img1 = document.getElementById("url_img1");
    var url_img2 = document.getElementById("url_img2");
    var url_img3 = document.getElementById("url_img3");
    var url_img4 = document.getElementById("url_img4");
    var product_name = document.getElementById("product_name");
    var product_price = document.getElementById("product_price");
    var product_description = document.getElementById("product_description");
    
    var company_data = JSON.parse(localStorage.getItem('company_data'))

    var all_data = {
        imagens:[url_img1.value,url_img2.value,url_img3.value,url_img4.value],
        nome:product_name.value,
        descricao:product_description.value,
        preco:product_price.value,
        banner: url_img_pr.value,
        url_img: company_data.url_img, 
        razao_social:company_data.razao_social,
        cnpj: company_data.cnpj,
        logradouro: company_data.logradouro,
        municipio: company_data.municipio,
        cep: company_data.cep,
        email: company_data.email,
        inscricaoEstadual: company_data.inscricaoEstadual,
        bairro: company_data.bairro,
        uf: company_data.uf,
        telefone: company_data.telefone,      
    }

    localStorage.setItem('company_data', JSON.stringify(all_data))
    document.location.href='./produtocopy.html'
})
