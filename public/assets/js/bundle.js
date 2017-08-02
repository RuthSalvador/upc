(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div id="map-result" class="map"></div>');

  const containerDetails = $('<div class="result__details bg--contrast"></div>');
  const div              = $('<div></div>');
  const details          = $('<div class=""></div>');
  const figure           = $('<figure></figure>');
  const img              = $('<img src="assets/img/serv-piscina.png" alt="piscina">');
  const divText          = $('<div></div>');
  const h4               = $('<h4 class="text-principal text-uppercase">piscina upc</h4>');
  const h5               = $('<h5 class="text-secondary">metros</h5>');

  const pasos = $('<div></div>');
  const p     = $('<p></p>');

  const btns     = $('<div></div>');
  const reservar = $('<button type="button" class="btn btn-block bg--principal text-uppercase" name="button">reservar</button>');
  const volver   = $('<button type="button" class="btn btn-block btn-default text-uppercase" name="button">volver</button>');

  section.append(divMap);
  section.append(containerDetails);
  containerDetails.append(details);
  containerDetails.append(pasos);
  containerDetails.append(btns);
  details.append(figure);
  details.append(divText);
  figure.append(img);
  divText.append(h4);
  divText.append(h5);
  pasos.append(p);
  btns.append(reservar);
  btns.append(volver);

  return section;

};
'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Resultado(_=>{ render(root) }));
    setTimeout(function() {
      initMap("map-result", laboratoriaLima);
    }, 500);
  }

  root.append(wrapper);
};

const state = {
  page: 0,
  data:{}
};

$( _ => {
  const root = $("#root");
  render(root);
});
},{}]},{},[1])