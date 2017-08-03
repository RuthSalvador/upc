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

	btnIngresar.on('click',(e) => {
		e.preventDefault();
		console.log('click');
		state.page = 2;
		update();
	});

	btnFacebook.on('click',(e) => {
		e.preventDefault();
		doLogin();
	});


	return section;
};

//deberia subir todoOK


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

  section
    .append(divMap)
    .append(containerDetails);

  containerDetails
    .append(details)
    .append(pasos)
    .append(btns);

  details
    .append(figure)
    .append(divText);

  figure
    .append(img);

  divText
    .append(h4)
    .append(h5);

  pasos
    .append(p);

  btns
    .append(reservar)
    .append(volver);

  return section;

};
'use strict';

const SegundaPantalla = () => {
	const section = $('<section>Hola SEGUNDA PANTALLA</section>');

	if(state.user){
		const name = $('<h1>state.user.name</h1>');
		const email = $('<p>state.user.email</p>');

		section
			.append(name)
			.append(email);

		const logout = $('<button>Salir</button>');

		logout.on('click',_ =>{
			FB.logout(response => {
				state.user = null;
				state.doRender();
			});
		});

		section.append(logout);
	}

	return section;
};

'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	if(state.user == null){
    	wrapper.append(Login(_=>{ render(root) }));
	}else {
		wrapper.append(SegundaPantalla());
	}

  // switch(state.screenView) {
  // case null:
  // 	wrapper.append(Home(_ => render(root)));
  // 	break;
  // }

  root.append(wrapper);
};

const state = {
	user: null,
	status: null,
	page: 1,
	data:{},
	rutasMo: null,
	screenView: null
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
  state.rutasMo = json;
  	console.log(state.rutasMo);
  	const root = $('.root');
  	render(root);
  	state.doRender = render.bind(null,root);
  });
});

},{}]},{},[1])