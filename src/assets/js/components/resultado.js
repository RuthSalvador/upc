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
