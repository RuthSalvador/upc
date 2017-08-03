
//centros
const upcMo = { lat: -12.103676, lng: -76.9633296};
const kata = { lat: -12.1040077, lng: -76.9624472};
//let myLocation;

const initMap = (mapa,centro, destiny) => {

  var map = new google.maps.Map(document.getElementById(mapa), {
    zoom: 18,
    center: centro,
    disableDefaultUI: true
  });

  var iconBase = 'assets/img/';
    marker = new google.maps.Marker({
      position: centro,
      map: map,
      icon: iconBase + 'ubicacion-mapa.png',
    });

    marker = new google.maps.Marker({
      position: destiny,
      map: map,
      icon: iconBase + 'tu-llegada.png',
    });



};





/* Con localización

var functionLocalization = function(position) {

    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    //map.setCenter(pos);
    map.setZoom(18);

    marker = new google.maps.Marker({
      position: pos,
      map: map
    });
  };

  var functionNotFounded = function(error) {
    alert("Encontramos un inconveniente para ver tu ubicación");
  };

  if (navigator.geolocation) {
    myLocation = navigator.geolocation.getCurrentPosition(functionLocalization, functionNotFounded);
    return myLocation;
  }*/