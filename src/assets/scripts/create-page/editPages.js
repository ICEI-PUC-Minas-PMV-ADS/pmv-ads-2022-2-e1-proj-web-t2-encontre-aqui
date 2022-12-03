window.addEventListener('load', updatePageInputs());


function updatePageInputs(){
    const url = window.location.href;
    const urlObj = new URL(url);
    const id_produto = urlObj.searchParams.get("id")

    var isDeliveries = document.getElementById("isDeliveries")
    var isReservation = document.getElementById("isReservation")

    var principal = document.getElementById("principal");
    var imgPreview = document.getElementById("imgPreview");
    var photo1 = document.getElementById("photo1");
    var photo2 = document.getElementById("photo2");
    var photo3 = document.getElementById("photo3");
    
    var url_img1 = document.getElementById("url_img1");
    var url_img2 = document.getElementById("url_img2");
    var url_img3 = document.getElementById("url_img3");
    var url_img4 = document.getElementById("url_img4");
    var url_img_pr = document.getElementById("url_img_pr");

    var rsocial = document.querySelectorAll('.social input');

    var product_name = document.getElementById("product_name");
    var product_price = document.getElementById("product_price");
    var product_description = document.getElementById("product_description");

    const pages_data = JSON.parse(localStorage.getItem("pages_data"));
    const company_data = JSON.parse(localStorage.getItem("company_data"));
    
    

    if(company_data){
        if(pages_data){
            updateBackground(imgPreview, pages_data[pages_data.length-1].banner)
            rsocial[0].value = pages_data[0].rsocial[0]
            rsocial[1].value = pages_data[0].rsocial[1]
            for(var i = 0; i < pages_data.length; i++){
                if(pages_data[i].id === parseInt(id_produto)){
                isDeliveries.checked = pages_data[i].domicilio;
                isReservation.checked = pages_data[i].agendamento;

                    updateBackground(imgPreview, pages_data[pages_data.length-1].banner)
                    updateBackground(principal, pages_data[i].imagens[0])
                    updateBackground(photo1, pages_data[i].imagens[1])
                    updateBackground(photo2,pages_data[i].imagens[2])
                    updateBackground(photo3,pages_data[i].imagens[3])

                    url_img1.value = pages_data[i].imagens[0];
                    url_img2.value = pages_data[i].imagens[1];
                    url_img3.value = pages_data[i].imagens[2];
                    url_img4.value = pages_data[i].imagens[3];
                    url_img_pr.value = pages_data[i].banner;

                product_name.value = pages_data[i].nome;
                product_price.value = pages_data[i].preco;
                product_description.value = pages_data[i].descricao

                rsocial[0].value = pages_data[0].rsocial[0]
                rsocial[1].value = pages_data[0].rsocial[1]
            }
            }
        }
    }

}

function updateBackground(area, src){
    if(src != ''){
        area.style.backgroundImage = `url(${src})` 
        area.style.backgroundSize = `cover`                   
        area.style.backgroundRepeat = `no-repeat` 
    }
}