var map, directionsManagers = [];

function GetMap(empresa) {
    var origem
    var logo;
    if(empresa != undefined){
        origem =  new Microsoft.Maps.Location(empresa.cords[0], empresa.cords[1])
    
        var cardMap = `<a href="produto.html?id=${empresa.id}> "<div class="card-map">
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
    
  
    var teste = document.getElementById("testemap");

    map = new Microsoft.Maps.Map('#places-in-maps', {
        credentials: 'Aj30kitBtzqfccLqDP_RXQYks09ie-CQ5gvx0dnWFyyQImim-GDuVIVUl0VUwjQr',
        center: origem,
        zoom: 17
    });

    var pin = new Microsoft.Maps.Pushpin(origem, {
       // icon: logo,
        anchor: new Microsoft.Maps.Point(0, 0)
    });

    map.entities.push(pin);
   
    infobox = new Microsoft.Maps.Infobox(origem, {
        htmlContent: cardMap
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);
 
    var rota1 = 'Rua Doutor João Pinheiro, 469, Jardim Glória, Juiz de Fora - MG, 36036';
    var rota2 = 'Avenida Barão do Rio Branco, 950, Centro, Juiz de Fora - MG, 36010-908, Brasil';
    if(empresa != undefined){
        rota2 = `${empresa.logradouro}, ${empresa.cidade}, ${empresa.estado}`
    }
     


    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Generate some routes.

        getRoute(rota2, rota1, 'orange');
    });
}

function getRoute(start, end, color) {
    var dm = new Microsoft.Maps.Directions.DirectionsManager(map);
    directionsManagers.push(dm);

    dm.setRequestOptions({
        routeMode: Microsoft.Maps.Directions.RouteMode.driving
    });


    dm.setRenderOptions({
        autoUpdateMapView: false,
        drivingPolylineOptions: {
            strokeColor: color,
            strokeThickness: 3
        }
    });

    dm.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ address: start }));
    dm.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ address: end }));

    dm.calculateDirections();
}

