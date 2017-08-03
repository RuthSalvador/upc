'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Login(_=>{ render(root) }));
  } else if(state.page == 1){
    wrapper.append(Sedes(_=>{ render(root) }));
  } else if(state.page == 2){
    wrapper.append(Buscar(_=>{ render(root) }));
    setTimeout(function () {
      initMap("map-buscar", -12.1037153,-76.9633269, kata);
    }, 500);
  }else if(state.page == 3 ) {
    wrapper.append(BuscarLugar(_=>{ render(root) }));
  } else if(state.page == 4 ) {
    wrapper.append(Resultado(_ => { render(root) }));
    setTimeout(function () {
      initMap("map-result", upcMo, kata);
    }, 500);
  } else if(state.page == 6 ) {
        wrapper.append(BuscarClass(_=>{ render(root) }));
  }
  root.append(wrapper);
};

const state = {
  rutasMo: null,
  rutasSis: null,
  upcMonterrico: null,
  page: 1,
  usuario: null,
  rutasSede: null,
  upcSede: null,
  clases:null,
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
  state.rutasMo = json;
  console.log(state.rutasMo.features[0].geometry.coordinates[1]);
  });
  getJSON('/rutasSis', (err, json) => {
      state.rutasSis = json;
  });
  getJSON('/upcMonterrico', (err, json) => {
      state.upcMonterrico = json;
  });
  getJSON('/clases', (err, json) => {
      state.clases = json;
  });

  const root = $('.root');
  render(root);

});
