const sections = document.querySelectorAll('.section')
const upPage = document.getElementById('upPage')
const downPage = document.getElementById('downPage')

var previous, next;
var selected = 0; 

previous = document.getElementById('previous') 
next = document.getElementById('next')    
 

upPage.addEventListener('click', ()=>{
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
   if(selected < 3){
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
