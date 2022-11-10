var favoritos =  JSON.parse(localStorage.getItem('favoritos'));


function checkFavorites(empresa){
    var favorito = {
        id:empresa.id,
        nome:empresa.nome,
        categoria:empresa.categoria,
        isEmpresa:empresa.isEmpresa
    }
                    //Verificar se foi marcado como favorito
    var marked = '';
                    if(favoritos != null && favoritos.length > 0){                        
                            for(var i = 0; i < favoritos.length; i++){ 
                              var marcado = {
                                id:favoritos[i].id,
                                nome:favoritos[i].nome,
                                categoria:favoritos[i].categoria,
                                isEmpresa:favoritos[i].isEmpresa
                            }  ;  
                                if(Object.is(JSON.stringify(marcado), JSON.stringify(favorito))){ 
                                                
                                     marked = 'marked'
                                }
                              }
                            }
                        
    return marked;                
}
