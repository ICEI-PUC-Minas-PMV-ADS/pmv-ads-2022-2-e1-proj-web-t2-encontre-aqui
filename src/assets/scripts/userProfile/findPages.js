window.addEventListener('load', ()=>{
    var img_avatar = document.getElementById('avatar')
    const user = JSON.parse(localStorage.getItem('user')) 
    if(user === null || user === undefined){
        window.location.href = './login.html'
    }
    
    const pages_data = JSON.parse(localStorage.getItem('pages_data')) 
    const company_data = JSON.parse(localStorage.getItem('company_data')) 

    var pages = document.getElementById('pages')
    var cards= ''

    if(company_data){
        if(img_avatar){
          img_avatar.setAttribute('src', company_data.img_url)
        }
           
    }

    if(pages_data){
       
        for(var i = 0 ; i < pages_data.length; i++){
             cards += ` <div class="featured-product-item">
                <div style="background-image: url('${pages_data[i].imagens[0]}');"
                    class="featured-product-item-image"></div>
                <p class="title">
                    ${pages_data[i].nome}
                </p>
                <p class="description">
                    ${pages_data[i].descricao.substr(0,150)} ...
                </p>
                <a href="./produto.html?categoria=${pages_data[i].categoria}&id=${pages_data[i].id}&prodserv=${pages_data[i].id}">
                 <button class="button-bl"> Editar  </button>
                </a>
            </div>`
        }
    }

    pages.innerHTML = cards
})