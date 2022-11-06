var url = window.location.href;
var urlObj = new URL(url);


var id = Number(urlObj.searchParams.get("id"))
var url_categoria = urlObj.searchParams.get("categoria")

console.log(id)


var data = [] ;
var count = 0;
var empresas = [];

var logo_user = document.getElementById("logo-user");
var name_user =  document.getElementById("name-user");
var ps_descr = document.getElementById("ps-descr");
var description_ps = document.getElementById("description-ps");
var header_product_page = document.querySelector('.header-product-page');

var other_products = document.getElementById("other-products");
var complete_address = document.getElementById("complete-address");


addEventListener('load', ()=>{
    findCetegory()
   
})


function findCetegory(){

    Categorias.forEach(categoria =>{
        categoria.tags[0] 
        if(categoria.tags[0] === url_categoria){
            empresas = categoria.empresas
            empresas.forEach(empresa => {
                findCompany(empresa)
            })
           
        }
    })
  
    }
 

function findCompany(data){
    console.log(data)
    data.forEach(empresa =>{
        if(empresa.id === id){
          updatePage(empresa)
          GetMap(empresa)
        }
    })
}


function updatePage(product){
    var img_products = '';  
     
    header_product_page.style.backgroundImage = `url(${product.imgBanner})`; 
    header_product_page.style.backgroundSize = 'cover'
    logo_user.src = `${product.imagens[0]}`;
    name_user.innerHTML = `${product.nome}`;

    var price = ''
    if(product.ps_price != undefined && product.ps_price != null && product.ps_price != ''){
        price = "Preço: " + product.ps_price
    }


    var content = ` <div class="descr-images">
                            <div class="principal-image">
                                <img src="${product.produtos[0].imagens[0]}">
                            </div>
                            <div class="other-images">
                                <div> <img src="${product.imagens[0]}"></div>
                                <div> <img src="${product.imagens[0]}"></div>
                                <div> <img src="${product.imagens[0]}"></div>
                            </div>
                        </div>
                        <div class="description-text">
                            <div id="ps-title" class="title">${product.nome}</div>
                            <div id="ps-price">${price}</div>
                            <div id=""></div>
                            <div id="ps-descr"> ${product.descricao}  </div>
                        </div>
                        `
 
                description_ps.innerHTML = content; 


               for(var p = 0; p < product.produtos.length; p++){
                    img_products += `<a href="#"><img class = "other-imgs" src='${product.produtos[p].imagens[0]}' ></a>`

                }
                               
               // console.log(product.produtos[p])
                other_products.innerHTML = img_products


                complete_address.innerHTML = `${product.logradouro} ${product.cidade} ${product.estado}` 
}