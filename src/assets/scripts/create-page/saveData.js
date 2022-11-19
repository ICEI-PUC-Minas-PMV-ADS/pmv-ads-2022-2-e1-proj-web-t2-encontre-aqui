var btn_visualization = document.getElementById("btn_visualization");

btn_visualization.addEventListener('click', () =>{
    var isDeliveries = document.getElementById("isDeliveries")
    var isReservation = document.getElementById("isReservation")

    var url_img_pr = document.getElementById("url_img_pr");
    var url_img1 = document.getElementById("url_img1");
    var url_img2 = document.getElementById("url_img2");
    var url_img3 = document.getElementById("url_img3");
    var url_img4 = document.getElementById("url_img4");

    var product_name = document.getElementById("product_name");
    var product_price = document.getElementById("product_price");
    var product_description = document.getElementById("product_description");
    
    var company_data = JSON.parse(localStorage.getItem('company_data'))

    var page_data = {
        imagens:[url_img1.value, url_img2.value, url_img3.value, url_img4.value],
        nome:product_name.value,
        descricao:product_description.value,
        preco:product_price.value,
        domicilio: isDeliveries.checked,
        agendamento:isReservation.checked,
        banner: url_img_pr.value,     
         
    };

    localStorage.setItem('atual_page', JSON.stringify(page_data))
    var pages = JSON.parse(localStorage.getItem('pages_data'))
   
    if(pages!=null && pages!= undefined && pages.length > 0){
        pages.push(page_data)
    }else{
      var pages = [];
      pages.push(page_data);      
    }
    localStorage.setItem('pages_data', JSON.stringify(pages))
    document.location.href='./produtoVisualizacao.html'
})
