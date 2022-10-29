
var id = 2

empresas = Empresas.petshops;

empresas.forEach(empresa => {
    if(empresa.id === id){
        console.log(empresa)
    }
});