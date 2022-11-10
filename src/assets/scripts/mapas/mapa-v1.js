var map, directionsManagers = []
var rota;
var origem;
var cardMap = ''
var searchManager
var latitude, longitude
var pin, infoboxs
var locations = []

var icon = 'https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/dev/src/assets/images/icons/map-marker.png?raw=true';

function GetMap(empresa) {
    var origem
   
    var logo;
    if(empresa != undefined){
        rota = `${empresa.logradouro}, ${empresa.cidade}, ${empresa.estado}`
        geocodeQuery(rota)
        if(latitude != null && longitude!= null)
            origem =  new Microsoft.Maps.Location(latitude, longitude)
        else{
            origem = new Microsoft.Maps.Location(-21.762323, -43.346926);  
        }
    
       
      
        geocodeQuery(rota)
        var prod ='';
 
           for(var i =0; i < 1 ; i++){
            prod += `<a href="/produtos/produtos.html?id=${empresa.produtos[0].id}" > 
            <img src='${empresa.produtos[0].imagens[i]}' width="25"></a>`
            }

        cardMap = `<a href="produto.html?id=${empresa.id}> "<div class="card-map">
        <img id="logo-empresa" src="${empresa.imagens[0]}">

        <div class="card-body">
           
            <div class="description"> ${empresa.descricao.substr(0,45)}</div>
          
            <div class="logradouro"> ${empresa.logradouro}</div>
            <div> ${empresa.tel}</div>
                      
            ${isOpen(empresa.hfunc)}

        </div>
      
    </div>
    </a>
    
    `

        logo =  empresa.imagens[0]
    }else{
        
        origem = new Microsoft.Maps.Location(-21.762323, -43.346926);
        logo = './../../images/logos/logo1'
    }


  
   
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {

        map = new Microsoft.Maps.Map('#places-in-maps', {
            credentials: 'Aj30kitBtzqfccLqDP_RXQYks09ie-CQ5gvx0dnWFyyQImim-GDuVIVUl0VUwjQr',
            center: origem,
            zoom: 15
        });
   
                
        searchManager = new Microsoft.Maps.Search.SearchManager(map);
        geocodeQuery(rota);
        });
   
}



function geocodeQuery(query) {
        let location;
        var searchRequest = {
            where: query,
            callback: function (r) {
                //Add the first result to the map and zoom into it.
                if (r && r.results && r.results.length > 0) {
                    location = r.results[0].location;
                    pin = new Microsoft.Maps.Pushpin(r.results[0].location,{
                        icon: icon,
                     });
                    map.entities.push(pin);
                  
                    infobox = new Microsoft.Maps.Infobox(r.results[0].location, {
                        htmlContent: cardMap
                        
                    });

                    findLocations(location)
                    infobox.setMap(map);
                    map.setView({ bounds: r.results[0].bestView });
                }
            },
            errorCallback: function (e) {
                //If there is an error, alert the user about it.
         
            }
        };
      
        //Make the geocode request.
     
        searchManager.geocode(searchRequest);
    
}

function findLocations(location){
    locations.push(location)
    latitude = location.latitude
    logitude = location.longitude
}