
var id = 2

empresas = Empresas.petshops;

addEventListener('load', ()=>{
    empresas.forEach(empresa => {
        if(empresa.id === id){
             GetMap(empresa)
        }
    });
})
