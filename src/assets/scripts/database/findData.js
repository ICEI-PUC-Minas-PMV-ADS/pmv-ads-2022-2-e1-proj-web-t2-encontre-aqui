
var container = document.querySelector(".card-container")
var data = ''
var url = window.location.href
var urlObj = new URL(url)
var search = urlObj.searchParams.get("search")
var place = urlObj.searchParams.get("place")
var tags = document.querySelector('.tags')
var wanted_place = document.getElementById('wanted-place')


var local = []
var cardsPag
var cardsData = []
var favoritos;

foundObj = false
var i = 0

if(!search){
    search = 'petshop'
    place ='juiz de fora'
    updateWantedLocal(place)
}



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
    
    categoria.tags.forEach(tag => {    
        local = categoria.empresas[i]         
        if(tag.toLowerCase().includes(search.toLowerCase())){   
            updateTags(categoria)
            if(local != undefined)
            local.forEach(empresa => {              
                 
                if(empresa.cidade.toLowerCase().includes(place.toLowerCase())){
                    updateWantedLocal(empresa.cidade)
                    updateCard(empresa)
                    cardsData.push(empresa)
                    foundObj = true
                  
                    i++ 
                    return
                }
                
            })
                
        } else{
            if(local != undefined){               
            local.forEach(empresa =>{
                if(empresa.cidade.toLowerCase().includes(place.toLowerCase())){
                empresa.produtos.forEach(produto => {                    
                    if((empresa.nome.toLowerCase().includes(search.toLocaleLowerCase()) ||
                        (produto.descricao.toLowerCase().includes(search.toLowerCase())))){                    
                      
                          if(!foundObj){
                            updateTags(categoria)    
                          }
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
        }
               
    })
    i=0
}

/*  */
      
 function updateCard(empresa){
       
        var marked = checkFavorites(empresa)    
 
                        data += `<div class="card">
                                        <img id="logo-empresa" src="${empresa.imagens[0]}">

                                        <div class="card-body">
                                            <div class="product-name">${empresa.nome.substr(0,30)}</div>
                                            <div class="description">${empresa.nome} ${empresa.descricao.substr(0,45)}...</div>
                                            ${isOpen(empresa.hfunc)}
                                        </div>

                                        <div class="card-btn-actions">
                                       
                                        <div onclick="markFavorite(${empresa.id},'${empresa.nome}', '${empresa.categoria}', '${empresa.isEmpresa}')" class="mark-favorite ${marked}">
                                            <svg width="32" class="favorite" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_416_1070)">
                                                <path d="M4 4V31C3.99987 31.1737 4.04497 31.3443 4.13085 31.4953C4.21673 31.6462 4.34043 31.7722 4.48978 31.8608C4.63913 31.9494 4.80898 31.9976 4.98261 32.0006C5.15624 32.0036 5.32766 31.9614 5.48 31.878L16 26.138L26.52 31.878C26.6723 31.9614 26.8438 32.0036 27.0174 32.0006C27.191 31.9976 27.3609 31.9494 27.5102 31.8608C27.6596 31.7722 27.7833 31.6462 27.8692 31.4953C27.955 31.3443 28.0001 31.1737 28 31V4C28 2.93913 27.5786 1.92172 26.8284 1.17157C26.0783 0.421427 25.0609 0 24 0L8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4Z" fill="#555555"/>
                                                <path id="internal-path" d="M11 10.6129L15.9577 17L22 8" stroke="#555555" stroke-width="3"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_416_1070">
                                                <rect width="32" height="32" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Favoritar</span>                                            
                                        </div>


                                            <a href="${empresa.isEmpresa}.html?categoria=${empresa.categoria}&&id=${empresa.id}" class="btn btn-primary">Visitar</a>
                                        </div>
                                    </div>`
                 //   })
         

            container.innerHTML += data;
            data = '';
            toggleFavority();
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
           
            cards.addEventListener('click', ()=>{
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
        data += `<a href="./search.html?search=${tag}&place=${place}" class="btn btn-primary brad-25">${tag}</a>` 
    })
    tags.innerHTML += data;
    data = ''
}

function updateWantedLocal(place){
   wanted_place.innerHTML = place
}