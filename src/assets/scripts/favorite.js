const mark_favorite = document.querySelectorAll(".mark-favorite");

window.addEventListener("load", ()=>{
        mark_favorite.forEach(mark =>{

        mark.addEventListener('click',()=>{

            mark.classList.toggle('marked')
        })
    })
})

function markFavorite(id,categoria, tipo){
   var favorito = {
        id:id,
        categoria:categoria,
        tipo:tipo
    }
   
    marked = false
    
    var favoritos =  JSON.parse(localStorage.getItem('favoritos'))
  
    if(favoritos != null){
        
      
       var copy = [];
       
        for(var i =0;i < favoritos.length; i++){
            
            if(Object.is(JSON.stringify(favoritos[i]), JSON.stringify(favorito))){                          
                marked = true;
             } else{
                copy.push(favoritos[i]);
                     
             }          
         }
        if(marked == false){
            favoritos.push(favorito)
        }else{
            favoritos = copy;
        }
           
       localStorage.setItem('favoritos',JSON.stringify(favoritos))
       
    }else{
        var favoritos = [];
        favoritos.push(favorito)
        localStorage.setItem('favoritos',JSON.stringify(favoritos))
      
    }
}