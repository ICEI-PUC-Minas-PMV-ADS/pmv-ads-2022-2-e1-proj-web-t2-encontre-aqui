window.addEventListener('load', loadData);


function loadData(){
    var pages = JSON.parse(localStorage.getItem('pages_data'))
    var page_cards = document.querySelector('.cards');
    var cards = '';
    if(pages!= null){
    console.log(pages)
    for(var i = 0; i < pages.length; i++){
        cards += `<div class="card">
                        <img class="img_product_added" src='${pages[i].imagens[0]}'>
                  </div>
                    `
        }
    }

    cards += `<div class="card">
            <a href="./paginaCriacao.html">
                    <div class="adicionar-image" id="img-1"></div>
                    <div class="btn-1">Adicionar Página</div>
                </a>
            </div>
                `
    page_cards.innerHTML = cards

}

