'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div id="map-result" class="map"></div>');
  const content = $('<div class="result__details bg--contrast"></div>');

  const steps   = $('<div></div>');
  const p       = $('<p></p>');

  const btns    = $('<div></div>');
  let reserve;

  if ((state.dataPlaces.Name == 'Gimnasio')||(state.dataPlaces.Name == 'Piscina')){
    reserve = $('<button type="button" class="btn btn-block bg--principal text-uppercase" data-toggle="modal" data-target="#modalReserve">reservar</button>');
    btns.append(reserve);
  }
  const back    = $('<button type="button" class="btn btn-block btn--change text-uppercase">volver</button>');


  section
    .append(Header(update))
    .append(divMap)
    .append(content)
    .append(Modal('modalReserve'));

  content
    .append(HeaderResult(state.dataPlaces.src, state.dataPlaces.Name , "metros"))
    .append(steps)
    .append(btns);

  steps
    .append(p);

  btns
    .append(back);


  back.on('click',function () {
    state.page = 3;
    update();
  });
  return section;
};

//Modal:
const Modal = (idModal) => {
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
  const option1     = $('<option value="piscina">Gimnasio</option>');
  const option2     = $('<option value="gimnasio">Piscina</option>');

  const divHours    = $('<div class="form-group"></div>');
  const numHours    = $('<label class="col-xs-5">Número de horas:</label>');
  const selHours    = $('<input class="col-xs-6" type="number" min="1" max="2" placeholder="1">');

  const divDate     = $('<div class="form-group"></div>');
  const date        = $('<label class="col-xs-5">Día:</label>');
  const selDate     = $('<input class="col-xs-6" type="date" min="2017-08-03" value="2017-08-03">');

  const divHor     = $('<div class="form-group"></div>');
  const hor        = $('<label class="col-xs-5">Hora:</label>');
  const hours       = $('<select class="col-xs-6"></select>');

  let optionHours;
  for (let i=6; i<24; i++){
    optionHours = $('<option value="'+i+'">'+i+':00 hrs.</option>');
    hours
      .append(optionHours);
  }


  const btn = $('<button type="button" class="btn btn-block bg--principal text-uppercase">reservar</button>');

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
    .append(HeaderResult(state.upcSede[15].properties.src, "reserva de espacios deportivos","Consulte y reserve el espacio deportivo"))
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
    .append(option2);

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
