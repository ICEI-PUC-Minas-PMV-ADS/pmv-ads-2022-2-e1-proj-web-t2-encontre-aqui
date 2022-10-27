var map, directionsManagers = []
var rota;
var origem;
var cardMap = ''
var searchManager
var latitude, longitude
var pin, infoboxs
var locations = []
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
     
        cardMap = `<a href="produto.html?id=${empresa.id}> "<div class="card-map">
        <img id="logo-empresa" src="${empresa.imagens[0]}">

        <div class="card-body">
            <div class="product-name">${empresa.nome.substr(0,30)}</div>
            <div class="situation opened mt-10">Aberto</div>
        </div>
    </div>
    </a>`

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
   
        pin = new Microsoft.Maps.Pushpin(3, map.getBounds());
        
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
                    pin = new Microsoft.Maps.Pushpin(r.results[0].location);
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