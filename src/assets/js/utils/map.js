
//centros
const laboratoriaLima = { lat: -12.07702, lng: -77.09341};
//const RPChorrillos = {lat: -12.172645, lng: -76.992717};
let myLocation;

const initMap = (mapa,centro) => {

  var map = new google.maps.Map(document.getElementById(mapa), {
    zoom: 18,
    center: centro,
  });

  var marker;
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
  }


};
