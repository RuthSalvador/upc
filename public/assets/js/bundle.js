(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

//jbmnbmnbnm

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

const Login = (update) => {

	const section = $('<section id="login" class="container-fluid"></section>');

	const logo = $('<img src="assets/img/logo.png" alt="Logo Upc">');

	const contenedortitle = $('<div class="login__title row"></div>');
	const title = $('<h1 class="login__title--text col-xs-12">UPC GO!</h1>');

	const contenido = $('<div class="login__contenido row"></div>');

	const cajas = $('<div class="login__cajas col-xs-12"></div>');
	const codigoAlumno = $('<input type="text" class="contenido__codigo" placeholder="Código de Alumno"/>');
	const passwordAlumno = $('<input type="password" class="contenido__contraseña" placeholder="Contraseña"/>');

	const botones = $('<div class="login__botones col-xs-12"></div>');
	const btnIngresar = $('<button type="button" class="btn" name="button">Ingresar</button>');
	const btnFacebook = $('<button type="button" class="btn" name="button">Facebook</button>');
	const text = $('<p>* Olvidé contraseña</p>');

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
	      if (user) {
	        // User is signed in.
	        console.log(user);
	        state.page = 1;
	        update();
	      } else {
	        console.log('no logeado');
	      }
	    });
	});

		// btnIngresar.on('click', (e) => {
		// 	const codAlumno = codigoAlumno.val();
	  //   const passAlumno = passwordAlumno.val();
		// 	const auth = firebase.auth(); //constante para almacenar la promesa que nos va a devolver
		// 	const promise = auth.createUserWithEmailAndPassword(codAlumno,passAlumno);
		// 	promise.catch(e => {
		// 		console.log(e.message);
		// 	});
		// });

	return section;

};

//deberia subir todoOK


'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div id="map-result" class="map"></div>');
  const content = $('<div class="result__details bg--contrast"></div>');

  const steps   = $('<div></div>');
  const p       = $('<p></p>');

  const btns    = $('<div></div>');
  const reserve = $('<button type="button" class="btn btn-block bg--principal text-uppercase" data-toggle="modal" data-target="#modalReserve">reservar</button>');
  const back    = $('<button type="button" class="btn btn-block btn-default text-uppercase">volver</button>');

  section
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

  return modal;
};


'use strict';

const SegundaPantalla = () => {
	const section = $('<section>Hola SEGUNDA PANTALLA</section>');

	return section;
};

'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Login(_=>{ render(root) }));
  } else if(state.page == 1){
    wrapper.append(Resultado(_=>{ render(root) }));
    setTimeout(function() {
      initMap("map-result", laboratoriaLima);
    }, 500);
  }else if(state.page == 2){
    wrapper.append(SegundaPantalla());
  }

  root.append(wrapper);
};

const state = {
  page: 0,
  data:{},
  rutasMo: null,
  rutasSis: null,
	screenView: null
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
  state.rutasMo = json;
  console.log(state.rutasMo);
  const root = $('.root');
  render(root);
  });
});

$(document).ready(function() {
  getJSON('/rutasSis', (err, json) => {
    state.rutasSis = json;
    console.log(state.rutasSis);
    const root = $('.root');
    render(root);
  });
});

},{}]},{},[1])