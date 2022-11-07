var cards = '';
var featured_products = document.querySelector('.featured-products');

findFavories();


function findFavories(){
    var favoritos =  JSON.parse(localStorage.getItem('favoritos'));
  
    if(favoritos && favoritos.length > 0)
        findCompaniesProducts(favoritos)
}

function findCompaniesProducts(favoritos){
    var empresasProdutos;

    Categorias.forEach(categoria => {
        for(var i =0; i < favoritos.length; i++){
            if(categoria.tags[0] === favoritos[i].categoria){
                empresasProdutos = categoria.empresas[0]
                findCompanieProduct(empresasProdutos, favoritos[i])
            }
      }
    });
}

function findCompanieProduct(empresasProdutos, favorito){
    
    if(favorito.isEmpresa === 'empresa'){
        empresasProdutos.forEach(empPro => {
           if(empPro.id === favorito.id){
            if(empPro.categoria === favorito.categoria){
                updateCards(empPro)
            }
           }
        })
    }else{
        empresasProdutos.forEach(empPro => {
            for(var i=0; i < empPro.produtos.length; i++){
                if(empPro.produtos[i].id === favorito.id && empPro.produtos[i].nome === favorito.nome){
                    if(empPro.produtos[i].categoria === favorito.categoria){
                        updateCards(empPro.produtos[i])
                    }
                }

            }
            
        })
    }
    updateAllCards()
}

function updateCards(empPro){
    cards += ` <div class="featured-product-item">
                <div style="background-image: url('${empPro.imagens[0]}');"
                    class="featured-product-item-image"></div>
                <p class="title">
                    ${empPro.nome}
                </p>
                <p class="description">
                    ${empPro.descricao.substr(0,150)} ...
                </p>
                <a href="./${empPro.isEmpresa}.html?categoria=${empPro.categoria}&id=${empPro.id}">
                 <button>   Ir para ${empPro.isEmpresa}  </button>
                </a>
            </div>`
}

function updateAllCards(){
    featured_products.innerHTML = cards
}