'use strict';

const Buscar = (update) => {
  const section = $('<section></section>');
  const map     = $('<div id="map-buscar" class="map"></div>');
  const btn     = $('<button type="button" id="buscar" class="btn">¿A dónde quieres ir?</button>');
  const img     = $('<img src="assets/img/lupa.png" alt ="buscar">');

  const back    = $('<button type="button" id="btn-back" class="btn btn-danger text-uppercase">volver</button>');

  section
    .append(Header(update))
    .append(map)
    .append(btn)
    .append(back);

  btn
    .append(img)
    .on('click', (e) => {
        e.preventDefault();
        state.page = 3;

      update();
    });

  back.on('click',function () {
    state.page = 1;
    update();
  });
    return section;
};
