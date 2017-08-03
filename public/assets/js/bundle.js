(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const Buscar = (update) => {
    const box = $('<div class="hidden-sm hidden-md hidden-lg"></div>');
    const btn = $('<button type="submit" id="buscar"class="btn btn-primary ">¿A dónde quieres ir?</button>');
    const span = $('<span class="glyphicon glyphicon-search"></span>');
    btn.append(span);
    box.append(btn);
    btn.on('click', (e) => {
        e.preventDefault();
        state.page = 5;
        update();
    })

    return box;
}

const BuscarLugar = (update) => {
    const lugar         = $('<div id="buscarLugar" ></div>');
    const secSearch = $('<section id="search"></section>');
    const secClass  = $('<section id="clase"></section>');
    const secOther  = $('<section id="places"></section>');

    lugar.append(secSearch);
    lugar.append(secClass);
    lugar.append(secOther);
    return lugar;
}

'use strict'
const Header = () => {
    const principal     = $('<header></header>');

    const arrowLeft     = $('<div class="pull-left hidden-xs"></div>');
    const userImg       = $('<img src="assets/img/avatar.png" alt="usuario alumno">')
    const user          = $('<p class="estudiante">Hola <span id="student">Javier</span></p>');

    const arrowRight    = $('<div class="pull-right"></div>');
    const ubicar        = $('<img src="assets/img/ubicacion-cabecera.png" alt="signo de ubicación" class="hidden-xs">');
    const namePrincipal = $('<h3>UPC GO! </h3>');
    const logoRed       = $('<img src="assets/img/logo.png" alt="logo upc rojo" class="hidden-sm hidden-md hidden-lg">');
    const logoWhite     =$('<img src="assets/img/crisol.png" alt="logo upc blanco" class="hidden-xs">');

    arrowLeft.append(userImg);
    arrowLeft.append(user);

    arrowRight.append(ubicar);
    arrowRight.append(namePrincipal);
    arrowRight.append(logoRed);
    arrowRight.append(logoWhite);

    principal.append(arrowLeft);
    principal.append(arrowRight);
    return principal;
}

'use strict';

const Resultado = (update) => {
    const section           = $('<section></section>');
    const divMap            = $('<div id="map-result" class="map"></div>');

    const containerDetails = $('<div class="result__details bg--contrast"></div>');
    const div              = $('<div></div>');
    const details          = $('<div class=""></div>');
    const figure           = $('<figure></figure>');
    const img              = $('<img src="assets/img/serv-piscina.png" alt="piscina">');
    const divText          = $('<div></div>');
    const h4               = $('<h4 class="text-principal text-uppercase">piscina upc</h4>');
    const h5               = $('<h5 class="text-secondary">metros</h5>');





    const pasos             = $('<div></div>');
    const p                 = $('<p></p>');

    const btns     = $('<div></div>');
    const reservar = $('<button type="button" class="btn btn-block bg--principal text-uppercase" data-toggle="modal" data-target="#modalReserva">reservar</button>');
    const volver   = $('<button type="button" class="btn btn-block btn-default text-uppercase">volver</button>');



    section.append(divMap,containerDetails);


  containerDetails
    .append(details)
    .append(pasos)
    .append(btns);

  details
    .append(figure)
    .append(divText);

  figure.append(img);

  divText
    .append(h4)
    .append(h5);

  pasos
    .append(p);

  btns
    .append(reservar)
    .append(volver);


  //Modal:
  const modal = $('<div class="modal fade" id="modalReserva" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>');
  const divDocument = $('<div class="modal-dialog" role="document"></div>');
  const divContent = $('<div class="modal-content"></div>');
  const header = $('<div class="modal-header"></div>');
  const close = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const body = $('<div class="modal-body"></div>');

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

  } else if(state.page == 1){
    wrapper.append(Login(_=>{ render(root) }));
  } else if(state.page == 2){
    wrapper.append(SegundaPantalla());
  } else if(state.page == 3) {
        wrapper.append(Header(_=>{ render(root) }));
  } else if(state.page == 4) {
        wrapper.append(Buscar(_=>{ render(root) }));

  } else if(state.page == 5 ) {
        wrapper.append(BuscarLugar(_=>{ render(root) }));

  }

  // switch(state.screenView) {
  // case null:
  // 	wrapper.append(Home(_ => render(root)));
  // 	break;
  // }

  root.append(wrapper);
};

const state = {
  page: 4,
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
  });
});

},{}]},{},[1])