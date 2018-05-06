//AIzaSyBj_mDinoI54H81kS-XwiBpG2U-1K8J3xY

function initMap() {
    let uluru = {lat: 59.851325, lng: 30.308088};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();

    let request = {
        origin: new google.maps.LatLng(59.853282, 30.321737), //точка старта
        destination: new google.maps.LatLng(59.851325,30.308088), //точка финиша
        travelMode: google.maps.DirectionsTravelMode.WALKING //режим прокладки маршрута
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

    directionsDisplay.setMap(map);
  }