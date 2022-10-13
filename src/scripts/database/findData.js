var petshop = Empresas.petshops;

var logo_empresa = document.querySelectorAll("#logo-empresa");

let i = 0;
petshop.forEach(element => {
    
    console.log("elemento: " +  element.logo)
    
    logo_empresa[i].src = element.logo
    console.log("empresa " + logo_empresa[i].src)
    i++;
});