
var container = document.querySelector(".card-container")
var data = ''
var url = window.location.href
var urlObj = new URL(url)
var search = urlObj.searchParams.get("search")
var place = urlObj.searchParams.get("place")

foundObj = false
var i = 0
var local = []

Categorias.forEach(element => { 
    if(foundObj == false)   
    element.tags.forEach(tag => {          
        if(tag === search){   
            local = element.empresas[i]   
            local.forEach(empresa => {
             console.log(empresa.cidade)       
           
          //  if(empresa.cidade[0] === 'juiz de Fora'){
                if(empresa.cidade.includes(place.toLowerCase())){
                    console.log(empresa)
                    updateCard(empresa)
                   
                    foundObj = true
                    console.log(i)
                    return
                }
            })
                
        }               
        
    })
    foundObj = false
    i++
   
});


/*  */

        function updateCard(empresa){
                    empresa.produtos.forEach(produto =>{
                      
                        data += `<div class="card">
                                        <img id="logo-empresa" src="${produto.imagens[0]}">

                                        <div class="card-body">
                                            <div class="product-name">${produto.nome.substr(0,30)}</div>
                                            <div class="description">${empresa.nome} ${produto.descricao.substr(0,20)}</div>
                                            <div class="situation opened mt-10">Aberto</div>
                                        </div>

                                        <div class="card-btn-actions">
                                            <!--  ------------------------------------  -->
                                            <span class="svg-icon svg-icon-primary svg-icon-2x">
                                                <!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/General/Bookmark.svg--><svg
                                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path
                                                            d="M8,4 L16,4 C17.1045695,4 18,4.8954305 18,6 L18,17.726765 C18,18.2790497 17.5522847,18.726765 17,18.726765 C16.7498083,18.726765 16.5087052,18.6329798 16.3242754,18.4639191 L12.6757246,15.1194142 C12.2934034,14.7689531 11.7065966,14.7689531 11.3242754,15.1194142 L7.67572463,18.4639191 C7.26860564,18.8371115 6.63603827,18.8096086 6.26284586,18.4024896 C6.09378519,18.2180598 6,17.9769566 6,17.726765 L6,6 C6,4.8954305 6.8954305,4 8,4 Z"
                                                            fill="#000000" />
                                                    </g>
                                                </svg>
                                                <!--end::Svg Icon-->
                                            </span>

                                            <!--  ------------------------------------  -->

                                            <a href="#" class="btn btn-primary">Visitar</a>
                                        </div>
                                    </div>`
                    })
         

            container.innerHTML += data;
            data = '';
        }