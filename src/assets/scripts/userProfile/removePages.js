function removePages(page){
    
    var pages_data = JSON.parse(localStorage.getItem('pages_data')) 
    var temp = []
   
    if(confirm("Tem certeza que deseja REMOVER está página") == true){
    for(var i = 0 ; i < pages_data.length; i++){
        if(pages_data[i].id != page){
            temp.push(pages_data[i])
        }
    }
    pages_data = temp
    localStorage.setItem('pages_data',JSON.stringify(pages_data))
    window.location.href = "./userProfile.html"
    }
   
   
    
   }
    
   
 