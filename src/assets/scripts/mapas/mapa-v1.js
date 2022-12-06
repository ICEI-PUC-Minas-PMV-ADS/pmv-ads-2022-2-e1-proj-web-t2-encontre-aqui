var map, directionsManagers = []
var rota;
var origem;
var cardMap = ''
var Allcards=''
var searchManager
var latitude, longitude
var pin, infoboxs
var locations = []
var card_atual = []
var icon = 'https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/dev/src/assets/images/icons/map-marker.png?raw=true';

  

function GetAllMap(empresas){
    var query ='';
    allCardMapView(empresas)  
    geocodeQuery(rota)  
          
}
function allCardMapView(empresas){
    for(var e = 0; e < empresas.length; e++){
     rota = `${empresas[e].logradouro}, ${empresas[e].cidade}, ${empresas[e].estado}`;
         card_atual.push(cardMapView(empresas[e])) 
    }
   
       
}

function cardMapView(empresa){
    var prod ='';
              if(empresa.produtos != null && empresa.produtos != undefined){
               for(var i =0; i < empresa.produtos.length ; i++){
                     prod += `<img src='${empresa.produtos[i].imagens[0]}' width="25">`
                 }
                }
                   
                    if(empresa.view != undefined || empresa.view != null){
                        cardMap = `<a href="empresa.html?categoria=${empresa.categoria}&view=true>`
                    }else{
                        cardMap = `<a href="empresa.html?categoria=${empresa.categoria}&id=${empresa.id}&prodserv=22464654>`
                    }     

                    cardMap += `
                    "<div class="card-map">
                    <img id="logo-empresa" src="${empresa.imagens[0]}">
                    ${isOpen(empresa.hfunc)}
                    <div class="card-body">
                                
                        <div class="logradouro"> ${empresa.logradouro}</div>
                        <div> ${empresa.tel}</div>
                            <div class="map-prod">
                               ${prod}   
                            </div>
                    </div>

                    </div>
                    </a>    
                    `
                    return cardMap
}
 
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
        

       cardMapView(empresa)    

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
        var clusterLayer;
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
                  
                    if(card_atual.length > 0){
                        Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function () {
                            clusterLayer = new Microsoft.Maps.ClusterLayer({
                                clusteredPinCallback: createCustomClusterPushpins,
                                callback: createPushpinList
                            });
                        })

                        for(var c = 0; c < card_atual.length; c++){
                            cardMap = card_atual[c]
                            infobox = new Microsoft.Maps.Infobox(r.results[0].location, {
                                htmlContent: cardMap
                                
                            });
                              map.layers.insert(clusterLayer);
                            findLocations(location)
                            infobox.setMap(map);
                       }
                       card_atual = []
                     }else{
                    infobox = new Microsoft.Maps.Infobox(r.results[0].location, {
                        htmlContent: cardMap
                        
                    });
                  
                    findLocations(location)
                    infobox.setMap(map);
                    
                   }
                }
                map.setView({ bounds: r.results[0].bestView });
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

function createCustomClusterPushpins(cluster) {
    //Create a title for the cluster.
    cluster.setOptions({
        htmlContent: cardMap
    });
}

function pushpinClicked(e) {
    //Show an infobox when a pushpin is clicked.
    showInfobox(e.target);
}

function createPushpinList() {
    //Create a list of displayed pushpins each time clustering layer updates.

    if (clusterLayer != null) {
        infobox.setOptions({ visible: false });

        //Get all pushpins that are currently displayed.
        var data = clusterLayer.getDisplayedPushpins();
        var output = [];

        //Create a list of links for each pushpin that opens up the infobox for it.
        for (var i = 0; i < data.length; i++) {
            output.push("<a href='javascript:void(0);' onclick='showInfoboxByGridKey(", data[i].gridKey, ");'>");
            output.push(data[i].getTitle(), "</a><br/>");
        }

        document.getElementById('listOfPins').innerHTML = output.join('');
    }
}
