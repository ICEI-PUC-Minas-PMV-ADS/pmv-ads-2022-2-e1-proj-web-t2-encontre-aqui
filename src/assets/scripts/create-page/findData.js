var logo_area = document.querySelector('.logo-area')


window.addEventListener('load',  updatePage());


function updatePage(){
    var company_data = JSON.parse(localStorage.getItem('company_data'))

    logo_area.innerHTML = `
    <div>
    <img id="logo-user" src='${company_data.url_img}'>
    <span id="name-user" class="client-name">${company_data.razao_social}</span>
    </div>`
}

