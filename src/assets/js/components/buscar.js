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
