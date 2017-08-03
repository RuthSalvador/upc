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
