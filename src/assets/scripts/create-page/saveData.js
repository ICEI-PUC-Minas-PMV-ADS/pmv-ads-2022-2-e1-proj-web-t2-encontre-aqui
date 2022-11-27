var btn_visualization = document.getElementById("btn_visualization");
const url = window.location.href;
const urlObj = new URL(url);
const id_produto = urlObj.searchParams.get("id")

btn_visualization.addEventListener('click', () =>{

        
    var page_id = 0;
    var isDeliveries = document.getElementById("isDeliveries")
    var isReservation = document.getElementById("isReservation")

    var url_img_pr = document.getElementById("url_img_pr");
    var url_img1 = document.getElementById("url_img1");
    var url_img2 = document.getElementById("url_img2");
    var url_img3 = document.getElementById("url_img3");
    var url_img4 = document.getElementById("url_img4");

    var rsocial = document.querySelectorAll('.social input');

    var product_name = document.getElementById("product_name");
    var product_price = document.getElementById("product_price");
    var product_description = document.getElementById("product_description");
    
    var pages = JSON.parse(localStorage.getItem('pages_data'))
    
   


    if(pages){
        page_id = pages.length+1
    }

    var page_data = {
        id:page_id,
        imagens:[url_img1.value, url_img2.value, url_img3.value, url_img4.value],
        nome:product_name.value,
        descricao:product_description.value,
        preco:product_price.value,
        domicilio: isDeliveries.checked,
        agendamento:isReservation.checked,
        banner: url_img_pr.value, 
        rsocial:[rsocial[0].value, rsocial[1].value]            
    };
   

    localStorage.setItem('atual_page', JSON.stringify(page_data))
    
    
   
    if(pages!=null && pages!= undefined && pages.length > 0){
        
        if(id_produto != null && id_produto!= undefined){
            var edit_page = []
        
                for(var i = 0; i < pages.length; i++){
                    if(pages[i].id == parseInt(id_produto)){
                        edit_page.push(page_data)
                        page_id = pages[i].id
                    }else{
                        edit_page.push(pages[i])
                    }
                }
                pages = edit_page
                
         }else{
                pages.push(page_data);      
         }
        
    }else{
      var pages = [];
      pages.push(page_data);      
    }

   
    localStorage.setItem('pages_data', JSON.stringify(pages))
    document.location.href='./produtoVisualizacao.html'
})
