var petshop = Empresas.petshops;

var logo_empresa = document.querySelectorAll("#logo-empresa");

let i = 0;
petshop.forEach(element => {
    logo_empresa[i].src = element.logo
    i++;
});