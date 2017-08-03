'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div id="map-result" class="map"></div>');
  const content = $('<div class="result__details bg--contrast"></div>');

  const steps   = $('<div></div>');
  const p       = $('<p></p>');

  const btns    = $('<div></div>');
  let reserve;

  if ((state.dataPlaces.Name == 'Gimnasio')||(state.dataPlaces.Name == 'Piscina')||(state.dataPlaces.Name == 'Campos de Fulbito')){
    reserve = $('<button type="button" class="btn btn-block bg--principal text-uppercase" data-toggle="modal" data-target="#modalReserve">reservar</button>');
    btns.append(reserve);
  }
  const back    = $('<button type="button" class="btn btn-block btn--change text-uppercase">volver</button>');

  section
    .append(Header(update))
    .append(divMap)
    .append(content)
    .append(Modal('modalReserve', update));

  content
    .append(HeaderResult(state.dataPlaces.src, state.dataPlaces.Name , "metros"))
    .append(steps)
    .append(btns);

  steps
    .append(p);

  btns
    .append(back);

  (state.rutasSede).forEach(function (e) {
    if(e.name == state.dataPlaces.Name ){
      state.array = e.geometry.coordinates;
      (state.array).forEach(function (el,i) {
        (state.latitudes).push((state.array)[i][1]);
        (state.longitudes).push((state.array)[i][0]);
      });
    }
  });
  //const objetoRuta = new Object();

  for(let i = 0; i < (state.latitudes).length;i++){
    (state.objetoRuta.lat) = (state.latitudes)[i];
    (state.objetoRuta.lng) = (state.longitudes)[i];

    (state.myarray).push({lat: (state.latitudes)[i], lng: (state.longitudes)[i]});
  }

 console.log(state.objetoRuta);
 console.log(state.myarray);
  //if(state.dataPlaces.Name == stat)


  back.on('click',function () {
    state.page = 3;
    state.myarray = [];
    update();
  });
  return section;

};

//Modal:
const Modal = (idModal, update) => {
  const modal       = $(`<div class="modal fade" id="${idModal}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>`);
  const divDocument = $('<div class="modal-dialog" role="document"></div>');
  const divContent  = $('<div class="modal-content"></div>');

  const header      = $('<div class="modal-header"></div>');
  const logo        = $('<img src="assets/img/logo.png" alt="logo upc">');
  const close       = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const body        = $('<form class="modal-body form-horizontal"></form>');

  const divSpace    = $('<div class="form-group"></div>');
  const space       = $('<label class="col-xs-5">Espacio Deportivo:</label>');
  const selSpace    = $('<select class="col-xs-6"></select>');
  const option1     = $('<option value="gimnasio">Gimnasio</option>');
  const option2     = $('<option value="fulbito">Campo Fulbito</option>');
  const option3     = $('<option value="piscina">Piscina</option>');

  const divHours    = $('<div class="form-group"></div>');
  const numHours    = $('<label class="col-xs-5">Número de horas:</label>');
  const selHours    = $('<input class="col-xs-6" type="number" min="1" max="2" placeholder="1">');

  const divDate     = $('<div class="form-group"></div>');
  const date        = $('<label class="col-xs-5">Día:</label>');
  const selDate     = $('<input class="col-xs-6" type="date" min="2017-08-03" value="2017-08-03">');

  const divHor      = $('<div class="form-group"></div>');
  const hor         = $('<label class="col-xs-5">Hora:</label>');
  const hours       = $('<select class="col-xs-6"></select>');

  let optionHours;
  for (let i=6; i<24; i++){
    optionHours = $('<option value="'+i+'">'+i+':00 hrs.</option>');
    hours
      .append(optionHours);
  }


  const btn = $('<button type="button" class="btn btn-block bg--principal text-uppercase">reservar</button>');

	btn.on('click', (e) => {
	  e.preventDefault();
      alert();
      state.page = 3;
      update();
      $('.modal-backdrop').hide();
	});

  modal
    .append(divDocument);

  divDocument
    .append(divContent);

  divContent
    .append(header)
    .append(body);

  header
    .append(logo)
    .append(close);

  body
    .append(HeaderResult(state.upcSede[0].properties.srcpisc, "reserva de espacios deportivos","Consulte y reserve el espacio deportivo"))
    .append(divSpace)
    .append(divHours)
    .append(divDate)
    .append(divHor)
    .append(btn);

  divSpace
    .append(space)
    .append(selSpace);

  selSpace
    .append(option1)
    .append(option2)
    .append(option3);

  divHours
    .append(numHours)
    .append(selHours);

  divDate
    .append(date)
    .append(selDate);

  divHor
    .append(hor)
    .append(hours);

  return modal;
};
