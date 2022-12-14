window.addEventListener('load', ()=>{
    var img_avatar = document.getElementById('avatar-user')
    var fav_info = document.querySelector('.fav-info');
    var textPrincipal = document.getElementById('textPrincipal')
    const user = JSON.parse(sessionStorage.getItem('user')) 
    var edit_user = document.querySelector('.edit_user')

    if(user === null || user === undefined){
        window.location.href = './login.html'
    }
    
    const pages_data = JSON.parse(localStorage.getItem('pages_data')) 
    const company_data = JSON.parse(localStorage.getItem('company_data')) 

    var pages = document.getElementById('pages')
    var cards= ''
    edit_user.innerHTML = ` <a href="./edicaodeDados.html?cliente=cliente" class="button button1">Editar perfil</a>` 

    if(company_data){
       if(pages_data){
            edit_user.innerHTML = ` <a href="./edicaodeDados.html?cliente=empresa" class="button button1">Editar perfil</a>` 
       }
       if(company_data.tel != null){
             fav_info.innerHTML =  `  <a href="./usuarioDivulgacao.html" class="button button1">Divulgar minha Empresa</a>
                                 Minhas Páginas :`;
            }

        if(img_avatar){
          textPrincipal.innerHTML = company_data.descricao          
          img_avatar.setAttribute('src', company_data.url_img)        
        }
           
    }

    if(pages_data){
       
        for(var i = 0 ; i < pages_data.length; i++){
             cards += ` <div class="featured-product-item">
             <a href="produtoVisualizacao.html?id=${pages_data[i].id}">
                <div style="background-image: url('${pages_data[i].imagens[0]}');"
                    class="featured-product-item-image"></div>
                <p class="title">
                    ${pages_data[i].nome}
                </p>
                <p class="description">
                    ${pages_data[i].descricao.substr(0,150)} ...
                </p>
                </a>
                <a href="./paginaCriacao.html?id=${pages_data[i].id}">
                 <button class="button-bl"> Editar  </button>  </a>
                 <button id="removePage" onclick='removePages("${pages_data[i].id}")' class="button-bl"> Remover  </button>
               
            </div>`
        }
    }

    pages.innerHTML = cards
})