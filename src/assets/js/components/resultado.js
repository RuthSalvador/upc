'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div></div>');
  const containerDetails = $('<div></div>');

  const details          = $('<div></div>');
  const figure           = $('<figure></figure>');
  const img              = $('<img src="assets/img/serv-piscina.png" alt="piscina">');
  const div              = $('<div></div>');
  const h4               = $('<h4>piscina upc</h4>');
  const h5               = $('<h5>metros</h5>');

  const pasos = $('<div></div>');
  const p     = $('<p></p>');

  const btns     = $('<div></div>');
  const reservar = $('<button type="button" class="btn btn-danger uppercase" name="button">reservar</button>');
  const volver   = $('<button type="button" class="btn btn-default uppercase" name="button">volver</button>');

  section.append(divMap);
  divMap.append(containerDetails);
  containerDetails.append(details);
  containerDetails.append(pasos);
  containerDetails.append(btns);
  details.append(figure);
  details.append(div);
  figure.append(img);
  div.append(h4);
  div.append(h5);
  pasos.append(p);
  btns.append(reservar);
  btns.append(volver);

  return section;

};