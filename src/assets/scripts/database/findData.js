
var container = document.querySelector(".card-container")
var data = ''
var url = window.location.href
var urlObj = new URL(url)
var search = urlObj.searchParams.get("search")
var place = urlObj.searchParams.get("place")
var tags = document.querySelector('.tags')

var cardsPag
var cardsData = []

if(search === null){
    search = 'petshop'
    place ='juiz de fora'
}

foundObj = false
var i = 0

var local = []


startSearch();
updateMap();



function startSearch(){
Categorias.forEach(categoria => { 
    if(foundObj == false)   
    searchPlace(categoria)
    foundObj = false
      
});
}

function searchPlace(categoria){
    i=0
    categoria.tags.forEach(tag => {    
        local = categoria.empresas[i]         
        if(tag.toLowerCase().includes(search.toLowerCase())){   
            updateTags(categoria)
            local.forEach(empresa => {
          //   console.log(empresa.cidade)               

                if(empresa.cidade.toLowerCase().includes(place.toLowerCase())){
                   
                    updateCard(empresa)
                    cardsData.push(empresa)
                    foundObj = true
                  
                    i++ 
                    return
                }
            })
                
        } else{
            if(local != undefined)
            local.forEach(empresa =>{
                if(empresa.cidade.toLowerCase().includes(place.toLowerCase())){
                empresa.produtos.forEach(produto => {                    
                    if(produto.descricao.toLowerCase().includes(search.toLowerCase())){                    
                           
                            updateCard(produto)
                            cardsData.push(empresa)
                            foundObj = true
                            i++ 
                            return
                        }
                                   
                    }) 
                }
                })
                                       
           }    
               
    })
}

/*  */

        function updateCard(empresa){
                   // empresa.produtos.forEach(produto =>{
                      
                        data += `<div class="card">
                                        <img id="logo-empresa" src="${empresa.imagens[0]}">

                                        <div class="card-body">
                                            <div class="product-name">${empresa.nome.substr(0,30)}</div>
                                            <div class="description">${empresa.nome} ${empresa.descricao.substr(0,35)}</div>
                                            <div class="situation opened mt-10">Aberto</div>
                                        </div>

                                        <div class="card-btn-actions">
                                           <img src="./assets/images/icons/bookmark.svg">
                                            <a href="produto.html?id=${empresa.id}" class="btn btn-primary">Visitar</a>
                                        </div>
                                    </div>`
                 //   })
         

            container.innerHTML += data;
            data = '';
           
        }


 function updateMap(){
    var id_current = 0
    var id_next = 0;
    if(cardsData.length > 0){
        
        cardsPag = document.querySelectorAll('.card')
        addEventListener('load',()=>{

            GetMap(cardsData[0]) 
            cardsPag[id_current].classList.add('active')
            return
        })               
        cardsPag.forEach((cards, index) =>{      
           
            cards.addEventListener('mousedown', ()=>{
               id_current = id_next
               id_next = index
               cardsPag[id_current].classList.remove('active')
               cardsPag[id_next].classList.add('active')
               GetMap(cardsData[index])               
               return
               
            })
         
        })
       
    }
       
   
  }

function updateTags(categoria){
    categoria.tags.forEach(tag => {
        data += `<a href="#" class="btn btn-primary brad-25">${tag}</a>` 
    })
    tags.innerHTML += data;
    data = ''
}