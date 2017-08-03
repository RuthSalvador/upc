(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.fbAsyncInit = function() {
	FB.init({
		appId	: '648776228595741',
		cookie	: true,
		xfbml	: true,
		version	: 'v2.9'
	});
};

function loginHandler (response) {
	if(response.status === 'connected'){
		state.status = 'Conectado';
		FB.api('/me?fields=email,name', user => {
			state.user = user;
			state.doRender();
		});
	} else if(response.status === 'not_authorized'){
		state.user = null;
		state.status = 'Aplicación no autorizada';
		state.doRender();
	}
}

function doLogin() {
	FB.login(loginHandler, {scope:'email'});
}

'use strict';

const filterByPlace = (places,query) => {
		return places.filter((place) => {
      console.log(place);
			return place.nombre.toLowerCase().indexOf(query.toLowerCase()) != -1;
		});
}

var getJSON = (url, cb) => {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    } cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

'use strict';

const HeaderResult = (image, title, detail) => {
  const div        = $('<div></div>');
  const details    = $('<div class=""></div>');
  const figure     = $('<figure></figure>');
  const img        = $(`<img src="assets/img/${image}.png" alt="piscina">`);
  const divText    = $('<div></div>');
  const h4         = $(`<h4 class="text-principal text-uppercase">${title}</h4>`);
  const h5         = $(`<h5 class="text-secondary">${detail}</h5>`);

  div
    .append(details);

  details
    .append(figure)
    .append(divText);

  figure
    .append(img);

  divText
    .append(h4)
    .append(h5);

  return div;
};




const kata = { lat: -12.1045677, lng: -76.9630828};
//let myLocation;
var markerUbication;
var markerDestiny;

const initMap = (mapa,latitud,longitud,destiny) => {

  var centro = {
    lat: latitud,
    lng: longitud
  };

  var map = new google.maps.Map(document.getElementById(mapa), {
    zoom: 19,
    center: centro,
    disableDefaultUI: true
  });




  var iconBase = 'assets/img/';
    markerUbication = new google.maps.Marker({
      position: centro,
      map: map,
      icon: iconBase + 'ubicacion-mapa.png',
      draggable: true,
      animation: google.maps.Animation.DROP,
    });



    markerDestiny = new google.maps.Marker({
      position: destiny,
      map: map,
      icon: iconBase + 'tu-llegada.png',
      draggable: true,
      animation: google.maps.Animation.DROP,
    });




  var flightPlanCoordinates = [
    {lat: -12.103676, lng: -76.9633296},
    {lat: -12.1042031, lng: -76.9629622},
    {lat: -12.1043683, lng: -76.9629809},
    {lat: -12.1044444, lng: -76.9630909},
    {lat: -12.1045677, lng: -76.9630828},
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);


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
'use strict';

const Buscar = (update) => {
  const section = $('<section></section>');
  const map     = $('<div id="map-buscar" class="map"></div>');
  const btn     = $('<button type="button" id="buscar" class="btn">¿A dónde quieres ir?</button>');
  const img     = $('<img src="assets/img/lupa.png" alt ="buscar">');

  section
    .append(Header(update))
    .append(map)
    .append(btn);

  btn
    .append(img)
    .on('click', (e) => {
        e.preventDefault();
        state.page = 3;

      update();
    });
    return section;
};

'use strict';

const classItem = (classes, update)  => {
    const item = $('<div class="item"></div>');
    const nam = $('<p class="p-clase">'+classes.nombre+'</p>');
    const small = $('<br><small>'+classes.horario+'</small>');
    const images = $('<img src="'+classes.src+'">');

    item.append(images);
    item.append(nam,small);

    return item;
}

const reRenderClass = (sectionList, result, update) => {
    sectionList.empty();
    result.forEach((classes) => {
        sectionList.append(classItem(classes, update));
    });
};


const BuscarClass = (update) => {
  const lugar     = $('<div id="buscarLugar" ></div>');
  const secSearch = $('<section id="search"></section>');
  const secClass  = $('<section id="clase"></section>');
  const secOther  = $('<section id="places"></section>');

  const container = $('<div class="container container-buscar"></div>');
  const boxImg    = $('<div class="col-xs-2 "></div>');
  const img       = $('<img src="assets/img/reserva.png"> alt="ir a clases"');
  const boxText   = $('<div class="col-xs-9"></div>')
  const parr      = $('<p>Volver a principales lugares</p>');
  const span      = $('<span>Top lugares en campus</span>');
  const boxArrow    = $('<div class="col-xs-1"></div>');
  const icon      = $('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');

  const containerGo = $('<div class="container"></div>');
  const boxArrowLeft    = $('<div class="col-xs-12"></div>');
  const iconLeft      = $('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
  const boxImgGo    = $('<div class="col-xs-2 "></div>');
  const imgGo      = $('<img class="" src="assets/img/go.png"> alt="ir a clases"');
  const boxTextGo  = $('<div class="col-xs-10"></div>');
  const inputOrigin = $('<input type="text" name="" value="">');
  const inputDestino = $('<input type="text" name="" value="" placeholder="¿A donde quieres ir?">');

  boxImgGo.append(imgGo);
  boxTextGo.append(inputOrigin,inputDestino);

  boxImg.append(img);
  boxText.append(parr,span);
  boxArrowLeft.append(iconLeft);
  boxArrow.append(icon);
  container.append(boxImg,boxText,boxArrow);
  containerGo.append(boxArrowLeft,boxImgGo,boxTextGo);
  secSearch.append(containerGo);
  secClass.append(container);

  lugar.append(secSearch);
  lugar.append(secClass);
  lugar.append(secOther);

  inputDestino.on('keyup',(e) => {
      let filtersClases = filterByPlace(state.clases.clases,inputDestino.val());
      reRenderClass(secOther,filtersClases,update);
  });

  container.on('click',(e)=>{
    e.preventDefault();
    state.page = 4;
    update();
  });

  let list = state.clases.clases;
  reRenderClass( secOther, list, update);
  return lugar;
}

'use strict';

const searchItem = (places, update)  => {
    const item   = $('<div class="item"></div>');
    const link   = $('<a href=""></a>');
    const nam    = $('<p>'+places.properties.Name+'</p>');
    const images = $('<img src="'+places.properties.src+'" alt="'+places.properties.Name+'">');
    link.append(images);
    link.append(nam);
    item.append(link);

    return item;
};


const reRender = (sectionList, result, update) => {
    sectionList.empty();
    result.forEach((places) => {
        sectionList.append(searchItem(places, update));
    });
};


const BuscarLugar = (update) => {
    const lugar = $('<div id="buscarLugar" ></div>');

    const secSearch = $('<section id="search"></section>');
    const secClass = $('<section id="clase"></section>');
    const secOther = $('<section id="places"></section>');

    const container     = $('<div class="container container-buscar"></div>');
    const boxImg        = $('<div class="col-xs-2 "></div>');
    const img           = $('<img src="assets/img/reserva.png"> alt="ir a clases"');
    const boxText       = $('<div class="col-xs-9"></div>')
    const parr          = $('<p>Quiero ir a mis clases</p>');
    const span          = $('<span>Sincronizado con tu horario</span>');
    const boxArrow      = $('<div class="col-xs-1"></div>');
    const icon          = $('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');

    const containerGo   = $('<div class="container"></div>');
    const boxArrowLeft  = $('<div class="col-xs-12"></div>');
    const iconLeft      = $('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
    const boxImgGo      = $('<div class="col-xs-2 "></div>');
    const imgGo         = $('<img class="" src="assets/img/go.png"> alt="ir a clases"');
    const boxTextGo     = $('<div class="col-xs-10"></div>');
    const inputOrigin   = $('<input type="text" value=" Puerta de ingreso 2 Campus Villa" id="origen">');
    const inputDestino  = $('<input type="text" value="" id="destino" placeholder=" ¿A dónde quieres ir?">');

    boxImgGo.append(imgGo);
    boxTextGo.append(inputOrigin,inputDestino);
    boxImg.append(img);
    boxText.append(parr,span);
    boxArrowLeft.append(iconLeft);
    boxArrow.append(icon);
    container.append(boxImg,boxText,boxArrow);
    containerGo.append(boxArrowLeft,boxImgGo,boxTextGo);
    secSearch.append(containerGo);
    secClass.append(container);
    lugar.append(secSearch);
    lugar.append(secClass);
    lugar.append(secOther);
    iconLeft.on('click', (e)=> {
        e.preventDefault();
        state.page = 2;
        update();
    })
    container.on('click',(e)=>{
      e.preventDefault();
      state.page = 6;
      update();
    });
    let list = state.upcMonterrico.features;
    reRender( secOther, list, update);
    return lugar;
}

'use strict';
const Header = (update) => {
  const principal     = $('<header></header>');


  const arrowLeft     = $('<div class="pull-left hidden-xs"></div>');
  const userImg       = $('<img src="assets/img/avatar.png" alt="usuario alumno">');
  const user          = $('<p class="estudiante">Hola <span id="student">'+ state.usuario +'</span></p>');

  const arrowRight    = $('<div class="pull-right"></div>');
  const ubicar        = $('<img src="assets/img/ubicacion-cabecera.png" alt="signo de ubicación" class="hidden-xs">');
  const namePrincipal = $('<h3>UPC GO! </h3>');
  const logoRed       = $('<img src="assets/img/logo.png" alt="logo upc rojo" class="hidden-sm hidden-md hidden-lg">');
  const logoWhite     = $('<img src="assets/img/crisol.png" alt="logo upc blanco" class="hidden-xs">');

  arrowLeft.append(userImg);
  arrowLeft.append(user);

  arrowRight.append(ubicar);
  arrowRight.append(namePrincipal);
  arrowRight.append(logoRed);
  arrowRight.append(logoWhite);

  principal.append(arrowLeft);
  principal.append(arrowRight);

  return principal;
};

'use strict';

const Login = (update) => {

	const section = $('<section id="login" class="container-fluid"></section>');
	const logo 		= $('<img src="assets/img/logo.png" alt="Logo Upc">');

	const contenedortitle = $('<div class="login__title row"></div>');
	const title 					= $('<h1 class="login__title--text col-xs-12">UPC GO!</h1>');
	const contenido 			= $('<div class="login__contenido row"></div>');

	const cajas					 = $('<div class="login__cajas col-xs-12"></div>');
	const codigoAlumno 	 = $('<input type="text" class="contenido__codigo" placeholder="Correo electronico"/>');
	const passwordAlumno = $('<input type="password" class="contenido__contraseña" placeholder="Contraseña"/>');

	const botones		 	= $('<div class="login__botones col-xs-12"></div>');
	const btnIngresar = $('<button type="button" class="btn" name="button">Ingresar</button>');
	const btnFacebook = $('<button type="button" class="btn" name="button">Facebook</button>');
	const text 				= $('<p>* Olvidé contraseña</p>');

	contenedortitle.append(title);

	cajas
		.append(codigoAlumno)
		.append(passwordAlumno);

	botones
		.append(btnIngresar)
		.append(btnFacebook)
		.append(text);

	contenido
		.append(cajas)
		.append(botones);

	section
		.append(contenedortitle)
		.append(contenido)
		.append(logo);

	/*section.append(HeaderAll('Logeate',0,update));*/
	btnFacebook.on('click',(e)=>{
		var config = {
			apiKey: "AIzaSyD7SAHtwHAUv-24w6ww30l82qLu0wMjxmM",
			authDomain: "tf-upc.firebaseapp.com",
			databaseURL: "https://tf-upc.firebaseio.com",
			projectId: "tf-upc",
			storageBucket: "tf-upc.appspot.com",
			messagingSenderId: "293713595531"
		};
		firebase.initializeApp(config);
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		state.page = 2;
		update();
	});
	btnIngresar.on('click', (e) => {
			var config = {
			  apiKey: "AIzaSyD7SAHtwHAUv-24w6ww30l82qLu0wMjxmM",
			  authDomain: "tf-upc.firebaseapp.com",
			  databaseURL: "https://tf-upc.firebaseio.com",
			  projectId: "tf-upc",
			  storageBucket: "tf-upc.appspot.com",
			  messagingSenderId: "293713595531"
			};
			firebase.initializeApp(config);
	    const codAlumno = codigoAlumno.val();
	    const passAlumno = passwordAlumno.val();
	    const auth = firebase.auth(); //constante para almacenar la promesa que nos va a devolver
	    const promise = auth.signInWithEmailAndPassword(codAlumno,passAlumno);
	    promise.catch(e => {
	      console.log(e.message);
	    });

	    firebase.auth().onAuthStateChanged(function(user) {
				console.log(user);
	      if (user) {
	        // User is signed in.
	        state.page = 1;
	        state.usuario = user.email;
	        update();
          console.log(state.usuario);
        } else {
	        console.log('no logeado');
	      }
	    });
	});
	return section;
};

'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div id="map-result" class="map"></div>');
  const content = $('<div class="result__details bg--contrast"></div>');

  const steps   = $('<div></div>');
  const p       = $('<p></p>');

  const btns    = $('<div></div>');
  const reserve = $('<button type="button" class="btn btn-block bg--principal text-uppercase" data-toggle="modal" data-target="#modalReserve">reservar</button>');
  const back    = $('<button type="button" class="btn btn-block btn--change text-uppercase">volver</button>');

  section
    .append(Header(update))
    .append(divMap)
    .append(content)
    .append(Modal('modalReserve'));

  content
    .append(HeaderResult("serv-piscina", "piscina upc", "metros"))
    .append(steps)
    .append(btns);

  steps
    .append(p);

  btns
    .append(reserve)
    .append(back);

  return section;

};

//Modal:
const Modal = (idModal) => {
  const modal       = $(`<div class="modal fade" id="${idModal}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>`);
  const divDocument = $('<div class="modal-dialog" role="document"></div>');
  const divContent  = $('<div class="modal-content"></div>');

  const header      = $('<div class="modal-header"></div>');
  const close       = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const body        = $('<form class="modal-body form-horizontal"></form>');

  const divSpace    = $('<div class="form-group"></div>');
  const space       = $('<label>Espacio Deportivo:</label>');
  const selSpace    = $('<select></select>');
  const option1     = $('<option value="piscina">Piscina</option>');
  const option2     = $('<option value="gimnasio">Gimnasio</option>');

  const divHours    = $('<div class="form-group"></div>');
  const numHours    = $('<label>Número de horas:</label>');
  const selHours    = $('<input type="number" min="1" max="2">');

  const divDate     = $('<div class="form-group"></div>');
  const date        = $('<label>Día y hora:</label>');
  const selDate     = $('<input type="date">');

  const btn         = $('<button type="button" class="btn btn-block bg--principal text-uppercase">reservar</button>');

  modal
    .append(divDocument);

  divDocument
    .append(divContent);

  divContent
    .append(header)
    .append(body);

  header
    .append(close);

  body
    .append(HeaderResult("reserva", "reserva de espacios dep","reserva el espacio"))
    .append(divSpace)
    .append(divHours)
    .append(divDate)
    .append(btn);

  divSpace
    .append(space)
    .append(selSpace);

  selSpace
    .append(option1)
    .append(option2);

  divHours
    .append(numHours)
    .append(selHours);

  divDate
    .append(date)
    .append(selDate);
console.log(state.rutasMo);
  return modal;
};

'use strict';

const Sedes = (update) => {
	const section = $('<section id="sedes" class="container-fluid"></section>');

	const contenedortitle = $('<div class="sede__title row"></div>');
	const title 					= $('<h1 class="sede__title--text col-xs-12 text-center">Elige la sede</h1>');

	const sedes = $('<div class="sede__contenido row"></div>');

	const monterrico = $('<div class="sede--Monterrico col-xs-12 col-sm-6"><p>Campus Monterrico</p></div>');
	const sanIsidro	 = $('<div class="sede--SanIsidro col-xs-12 col-sm-6"><p>Campus San Isidro</p></div>');
	const villa 		 = $('<div class="sede--Villa col-xs-12 col-sm-6"><p>Campus Villa</p></div>');
	const sMiguel 	 = $('<div class="sede--SanMiguel col-xs-12 col-sm-6"><p>Campus San Miguel</p></div>');


	const sede = (campus, urlSede) => {
	  campus.on('click',(e) => {
		  e.preventDefault();
		  getJSON(urlSede, (err, json) => {
			//state.upcSede = json.features;
			state.origenLat = json.features[0].geometry.coordinates[0];
			state.origenLong = json.features[0].geometry.coordinates[1];

			console.log(state.origenLat);
			console.log(state.origenLong);
		  });

		  state.page = 2;
		  update();
	  });
  	};

	sede(monterrico,'/upcMonterrico');
	sede(sanIsidro,'/upcSis');

	contenedortitle.append(title);

	sedes
		.append(monterrico)
		.append(sanIsidro)
		.append(villa)
		.append(sMiguel);

	section
		.append(Header())
		.append(contenedortitle)
		.append(sedes);
	/*section.append(HeaderAll('Logeate',0,update));*/

	return section;
};

'use strict';

const terceraPantalla = () => {
	const section = $('<section>Hola tercera PANTALLA</section>');

	return section;
};
'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Login(_=>{ render(root) }));

  } else if(state.page == 1){
    wrapper.append(Sedes(_=>{ render(root) }));

  } else if(state.page == 2){
    wrapper.append(Buscar(_=>{ render(root) }));
    setTimeout(function () {
      initMap("map-buscar", state.origenLong, state.origenLat, '');
    }, 500);
  } else if(state.page == 3 ) {
    wrapper.append(BuscarLugar(_=>{ render(root) }));
    setTimeout(function () {
      initMap("map-buscar", state.origenLong, state.origenLat, kata);
    }, 500);

  } else if(state.page == 4 ) {
    wrapper.append(BuscarClass(_=>{ render(root) }));

  }else if(state.page == 5 ) {
    wrapper.append(Resultado(_ => { render(root) }));
    setTimeout(function () {
      initMap("map-result", state.origenLong, state.origenLat, kata);
    }, 500);
  }
  root.append(wrapper);
};

const state = {
  page: 1,
  usuario: null,
  rutasSede: null,
  upcSede: null,
  origenLat :null,
  origenLong: null,
  clases: null
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
      state.rutasMo = json;
  });
  getJSON('/rutasSis', (err, json) => {
      state.rutasSis = json;


  console.log(state.rutasMo.features[0].geometry.coordinates[1]);

  });
  getJSON('/upcMonterrico', (err, json) => {
      state.upcMonterrico = json;
  });
  getJSON('/clases', (err, json) => {
      state.clases = json;
  });

  const root = $('.root');
  render(root);

});
},{}]},{},[1])