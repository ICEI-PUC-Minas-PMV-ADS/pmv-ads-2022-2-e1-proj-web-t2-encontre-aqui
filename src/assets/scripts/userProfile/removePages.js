function removePages(page){
    var pages = document.getElementById('pages')
    const pages_data = JSON.parse(localStorage.getItem('pages_data')) 
    var cards= ''
    var temp = []
    console.log(temp)
    for(var i = 0 ; i < pages_data.length; i++){
        if(pages_data[i].id != page){
            temp.push(page)
        }
    }
    pages_data = temp
  
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
            <button id="removePage" onclick='removePages("${pages_data[i]}")' class="button-bl"> Remover  </button>
           
       </div>`
   }
    
    pages.innerHTML = cards
}