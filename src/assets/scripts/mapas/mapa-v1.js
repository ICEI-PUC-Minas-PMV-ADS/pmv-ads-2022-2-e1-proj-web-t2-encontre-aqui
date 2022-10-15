var map, directionsManagers = [];

function GetMap() {
    var origem = new Microsoft.Maps.Location(-21.765401, -43.348767);
    map = new Microsoft.Maps.Map('#places-in-maps', {
        credentials: 'Aj30kitBtzqfccLqDP_RXQYks09ie-CQ5gvx0dnWFyyQImim-GDuVIVUl0VUwjQr',
        center: origem,
        zoom: 17
    });

    var pin = new Microsoft.Maps.Pushpin(origem, {
        icon: './images/lugar.PNG',
        anchor: new Microsoft.Maps.Point(0, 0)
    });

    map.entities.push(pin);
   
    
    var rota1 = 'Rua Santa Rita, 323, Centro, Juiz de Fora - MG, 36010-070, Brasil';
    var rota2 = 'Avenida Barão do Rio Branco, 950, Centro, Juiz de Fora - MG, 36010-908, Brasil';


    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Generate some routes.

        getRoute(rota1, rota2, 'orange');
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

