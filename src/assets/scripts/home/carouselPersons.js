var data =  ''
window.addEventListener('load', loadPersons)

function loadPersons(){
   var galeria = document.querySelector('.galeria')
   var nEmpresas = 12, j=0;
   Object.keys(Empresas).forEach(empresa =>{
        if(j < nEmpresas ){
            var selected = Empresas[empresa]
            for(var i = 0; i < selected.length; i++){
                updateCards(selected[i])
                j++;
            }
      }
   })
   galeria.innerHTML = data;
   data = ''
}

function updateCards(selected){
    data +=  `<a class="card-prof item" href="./empresa.html?categoria=${selected.categoria}&id=${selected.id}">
    <img src="${selected.imagens[0]}">
    <div class="descricao">
        <h4>${selected.nome}</h4>
        <p>${selected.logradouro.substr(0,30)}</p>
        <p class="opened">${selected.categoria}</p>

    </div>
</a>`
}