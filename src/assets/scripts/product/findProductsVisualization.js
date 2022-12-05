var url = window.location.href;
var urlObj = new URL(url);



//var prodserv = Number(urlObj.searchParams.get("prodserv"))
/*
var id = 12;
var prodserv = 9;
url_categoria ="restaurante";
*/
//var url_categoria = urlObj.searchParams.get("categoria")

var logo_area = document.querySelector('.logo-area')
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
var info = document.getElementById('info');
var place_options = document.querySelector(".place-options");
var other_products = document.getElementById("other-products");
var complete_address = document.getElementById("complete-address");


addEventListener('load', ()=>{
    var empresa = {}
    var company_data = JSON.parse(localStorage.getItem('company_data'))
    var atual_page = JSON.parse(localStorage.getItem('atual_page'))
    
    if(company_data){
           empresa.imgBanner = atual_page.banner;/// <-----
           empresa.descricao = company_data.descricao; 
           empresa.nome = company_data.razao_social;
           empresa.logradouro = company_data.logradouro + ', ' + company_data.bairro;
           empresa.cidade = company_data.cidade;
           empresa.estado = company_data.uf;
           empresa.categoria = company_data.categoria;
           empresa.imagens = [`${company_data.url_img}`];
           empresa.hfunc =  company_data.hfunc;
           empresa.rsocial = atual_page.rsocial;   
           empresa.tel = company_data.tel;
       }
       
       updatePage(empresa)
       GetMap(empresa) 
       imageView() 
})


function findCetegory(){

    Categorias.forEach(categoria =>{
      
        if(categoria.tags[0] === url_categoria){
            empresas = categoria.empresas
            empresas.forEach(empresa => {
                findCompany(empresa)
            })
           
        }
    })
  
    }
 

function findCompany(data){
      data.forEach(empresa =>{
        if(empresa.id === id){
         
          updatePage(empresa)
          GetMap(empresa)
        }
    })
}


function updatePage(empresa){
  
    var pages_data = JSON.parse(localStorage.getItem('pages_data'))
    var atual_page = JSON.parse(localStorage.getItem('atual_page'))
    var publicar_content = document.getElementById("publicar_content");
    var id_produto = urlObj.searchParams.get("id")

    if(id_produto && id_produto!=null && id_produto!= undefined){
        
        pages_data.forEach(page => {
            if(page.id == parseInt(id_produto)){
                atual_page =  page
            }
        });
    }    
    else{    
        publicar_content.innerHTML =  ` <div id="publicar_area">
        <h2 class="title">Se estiver tudo certo, publique sua página agora...</h2>
            <div class="btn-publ">          
             <a href="./usuarioDivulgacao.html" class="btn-publicar">PUBLICAR AGORA</a>
          </div></div>`
    }

    var img_products = '';  
   // var product = getProduct(empresa);
    var other_images = ''; 
    var domicilio = false;
    var reservas = false;
    var domicilioReservas =''
  
    header_product_page.style.backgroundImage = `url(${empresa.imgBanner})`; 
    header_product_page.style.backgroundSize = 'cover'
    
    logo_area.innerHTML = ` <a href="empresaVisualizacao.html?view=true">
                            <img id="logo-user" src='${empresa.imagens[0]}'>
                            <span id="name-user" class="client-name">${empresa.nome}</span> </a>`
   

    var price = ''
/*
    if(empresa.produto.preco != undefined && empresa.produto.preco != null && empresa.produto.preco != ''){
        price = "Preço: " + empresa.preco
    }
*/
    
   if(atual_page){
   for(var i = 1 ; i < atual_page.imagens.length; i++){
    if(atual_page.imagens[i] != "" && atual_page.imagens[i] != null)
     other_images += `<div> <img src="${atual_page.imagens[i]}"></div>`
   }

                var content = ` <div class="popup-img">
                                     <span>&times;</span>
                                   <img src="${atual_page.imagens[0]}">
                                </div>
    
    
                   <div class="descr-images">                           

                   <div class="principal-image">
                                 
                   <img src="${atual_page.imagens[0]}">
                    </div>
                     <div class="other-images">
                        ${other_images}
                     </div>
                        </div>
                        <div class="description-text">
                            <div id="ps-title" class="title">${atual_page.nome}</div>
                            <div id="ps-price">${price}</div>
                            <div id=""></div>
                            <div id="ps-descr"> ${atual_page.descricao.substr(0, 600)}  </div>
                        </div>
                        `
                    }
                document.getElementById('title_product').innerHTML =`<div id="ps-title" class="title">${atual_page.nome}</div>`;
                description_ps.innerHTML = content; 

            if(pages_data){
               for(var p = 0; p < pages_data.length; p++){
                    img_products += `<a href="produtoVisualizacao.html?id=${pages_data[p].id}">
                    <div><img class ="other-imgs" src='${pages_data[p].imagens[0]}' >
                        </div><div style="width:150px" class="opened">${pages_data[p].nome}</div></a>`

                }
            }           
              
                other_products.innerHTML = img_products


                complete_address.innerHTML = `${empresa.logradouro} ${empresa.cidade} ${empresa.estado}` 

                var marked = checkFavorites(empresa)

                
                if(atual_page.domicilio){
                    domicilioReservas =  `<div>
                                 <span>Oferece Entregas</span><img width="24" src="./assets/images/icons/check.svg">
                                 </div>`
                }
                if(atual_page.agendamento){
                    domicilioReservas +=  ` <div>
                                        <span>Aceita Reservas</span><img width="24" src="./assets/images/icons/check.svg">
                                          </div>`
                }

                place_options.innerHTML = domicilioReservas;         

           favorite_area.innerHTML =   `<span>Adicionar aos Favoritos</span>
                <div onclick="markFavorite(${empresa.id},'${empresa.nome}', '${empresa.categoria}', '${empresa.isEmpresa}')"
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
              
                info.innerHTML = `
                              
                  <div class="horarios" mt-100>
                      <span class="title">Horários</span>
                      <div class="table">
                              <div><span class="week">Domingo </span>
                               ${splitHorarios(empresa.hfunc[0])}                            
                               </div>
                          
                              <div><span class="week"> Segunda</span>
                              ${splitHorarios(empresa.hfunc[1])} 
                              </div>
                                               
                              <div><span class="week"> Terça  </span>
                              ${splitHorarios(empresa.hfunc[2])} 
                              </div>
                          
                              <div><span class="week">Quarta</span>
                              ${splitHorarios(empresa.hfunc[3])} 
                              </div>
                          
                              <div><span class="week">Quinta</span>
                              ${splitHorarios(empresa.hfunc[4])} 
                               </div>
                           
                               <div><span class="week">Sexta</span>
                              ${splitHorarios(empresa.hfunc[5])} 
                               </div>
                          
                              <div><span class="week">Sabado</span> 
                              ${splitHorarios(empresa.hfunc[6])} 
                              </div>
                      </div>
                      </div>
                      
                  <div class="contato">
                      <div class="local">
                          <div id="complete-address">
                            ${empresa.logradouro} ${empresa.cidade} ${empresa.estado}
                          </div>
                          <div>
                              <img width='32' src="./assets/images/icons/map.svg">
                          </div>
                      </div>
                      <div class="local">
                          <div>
                          <a href="http://web.whatsapp.com/">  (31)${empresa.tel} </a>
                          </div>
                          <div>
                          <img width='32' src="./assets/images/icons/whats.svg">
                          </div>
                      </div>
                  </div>
      
                  <div class="redes">
                  <div class="social">                   
                    <a href="${empresa.rsocial[0]}">
                     <span> Facebook  </span>
                     <img width='24' src="./assets/images/icons/facebook.svg">
                     </a>   
                   
                </div>
               
                <div class="social">                   
                    <a href="${empresa.rsocial[0]}">
                        <span> Instagram </span>
                         <img width='24' src="./assets/images/icons/instagram.svg">
                        </a>    
                   
                        </div>
                </div>
                      
                  </div>`
                      toggleFavority();
      }
      
function splitHorarios(horario){
          var h = horario.split('-');
          return `<span>${h[0]}</span> <span>${h[1]}</span>`;
      }
function getProduct(empresa){
    var p; 
    empresa.produtos.forEach(produto => {
        if(prodserv === produto.id){
           p = produto
        }
       
    })
    
     return p;
}

function imageView(){
    document.querySelectorAll('.descr-images img').forEach(image => {
        image.addEventListener('click', ()=>{
            
            document.querySelector('.popup-img img').src = image.getAttribute('src');           
            document.querySelector('.popup-img').classList.toggle('popup-img-large');
         //   document.querySelector('.popup-img-large').classList.remove('popup-img');
             
        })
            document.querySelector('.popup-img span').onclick = () =>{
                document.querySelector('.popup-img').classList.toggle('popup-img-large');
            }
})
   
}