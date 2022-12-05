const sections = document.querySelectorAll('.section')
const upPage = document.getElementById('upPage')
const downPage = document.getElementById('downPage')
var product_name = document.getElementById("product_name");
var product_price = document.getElementById("product_price");
var product_description = document.getElementById("product_description");
var url_img_pr = document.getElementById("url_img_pr");
var url_img1 = document.getElementById("url_img1");
var url_img2 = document.getElementById("url_img2");
var url_img3 = document.getElementById("url_img3");
var url_img4 = document.getElementById("url_img4");

var previous, next;
var selected = 0; 

previous = document.getElementById('previous') 
next = document.getElementById('next')    
 

upPage.addEventListener('click', ()=>{
    if(product_name.value.length < 10 || product_description.value.length < 10){
        userWarning("Nome do Produto ou serviço, devem ter mais de 10 caracteres...")
    }else if(url_img_pr.value=="" && url_img1.value=="" && url_img2.value=="" && url_img3.value=="" && url_img4.value==""){
        userWarning("Adicione pelo menos uma imagem ilustrativa, de seu produto ou serviço...")
    }       
    else
        if(selected > 0){ 
            previous = document.getElementById('previous') 
            next = document.getElementById('next')    
            
            previous.removeAttribute('id')
            next.removeAttribute('id')       
        
            console.log(selected)
            sections[selected].setAttribute('id','next')
            selected--
            sections[selected].setAttribute('id', 'previous')           

        }
})

downPage.addEventListener('click', ()=>{
   if(selected < 2){
    next = document.getElementById('next')     
    previous = document.getElementById('previous') 
  
    next.removeAttribute('id')
    previous.removeAttribute('id')
     
     
        console.log(selected)
        sections[selected].setAttribute('id','previous')
            selected++        
            sections[selected].setAttribute('id', 'next')
        
   
   }
})

function userWarning(mensagem){
    alert(mensagem)
}