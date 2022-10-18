
var container = document.querySelector(".card-container")
var data = ''
var url = window.location.href
var urlObj = new URL(url)
var search = urlObj.searchParams.get("search")
var place = urlObj.searchParams.get("place")

if(search === null){
    search = 'petshop'
    place ='juiz de fora'
}

foundObj = false
var i = 0
var j = 0
var local = []

Categorias.forEach(categoria => { 
    if(foundObj == false)   
    searchPlace(categoria)
    foundObj = false
      
});


function searchPlace(categoria){
    i=0
    categoria.tags.forEach(tag => {    
        local = categoria.empresas[i]         
        if(tag === search){   
           
            console.log(i)
            local.forEach(empresa => {
          //   console.log(empresa.cidade)               

                if(empresa.cidade.includes(place.toLowerCase())){
                    console.log(empresa)
                    updateCard(empresa)
                   
                    foundObj = true
                    console.log(i)
                    i++ 
                    return
                }
            })
                
        } else{
            
            local.forEach(empresa =>{
              
                empresa.produtos.forEach(produto => {
                    
                    if(produto.descricao.includes(search)){
                        if(empresa.cidade.includes(place)){
                            console.log(produto.descricao)
                            updateCard(produto)
                            foundObj = true
                            i++ 
                            return
                        }
                    }
               
                    }) 
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
                                            <a href="#" class="btn btn-primary">Visitar</a>
                                        </div>
                                    </div>`
                 //   })
         

            container.innerHTML += data;
            data = '';
        }