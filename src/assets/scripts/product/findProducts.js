var url = window.location.href;
var urlObj = new URL(url);


var id = Number(urlObj.searchParams.get("id"))
var url_categoria = urlObj.searchParams.get("categoria")

var _empresa;

var data = [] ;
var count = 0;
var empresas = [];

var logo_user = document.getElementById("logo-user");
var name_user =  document.getElementById("name-user");
var ps_descr = document.getElementById("ps-descr");
var description_ps = document.getElementById("description-ps");
var header_product_page = document.querySelector('.header-product-page');
var favorite_area = document.querySelector('.favorite-area');

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
    console.log("Empresas", data)
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

                var marked = checkFavorites(product)

           favorite_area.innerHTML =   `<span>Adicionar aos Favoritos</span>
                <div onclick="markFavorite(${product.id},'${product.nome}', '${product.categoria}', '${product.isEmpresa}')"
                    class="mark-favorite ${marked}">
                    <svg width="32" class="favorite" height="32" viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_416_1070)">
                            <path
                                d="M4 4V31C3.99987 31.1737 4.04497 31.3443 4.13085 31.4953C4.21673 31.6462 4.34043 31.7722 4.48978 31.8608C4.63913 31.9494 4.80898 31.9976 4.98261 32.0006C5.15624 32.0036 5.32766 31.9614 5.48 31.878L16 26.138L26.52 31.878C26.6723 31.9614 26.8438 32.0036 27.0174 32.0006C27.191 31.9976 27.3609 31.9494 27.5102 31.8608C27.6596 31.7722 27.7833 31.6462 27.8692 31.4953C27.955 31.3443 28.0001 31.1737 28 31V4C28 2.93913 27.5786 1.92172 26.8284 1.17157C26.0783 0.421427 25.0609 0 24 0L8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4Z"
                                fill="#555555" />
                            <path id="internal-path" d="M11 10.6129L15.9577 17L22 8" stroke="#555555"
                                stroke-width="3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_416_1070">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                `
                toggleFavority();
}