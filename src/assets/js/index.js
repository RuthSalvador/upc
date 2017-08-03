'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Login(_=>{ render(root) }));
  } else if(state.page == 1){
    wrapper.append(Resultado(_=>{ render(root) }));
    setTimeout(function() {
      initMap("map-result", laboratoriaLima);
    }, 500);

  }
  //else if(state.page == 1){
  //   wrapper.append(Login(_=>{ render(root) }));
  // }
  else if(state.page == 2){
    wrapper.append(SegundaPantalla());
  } else if(state.page == 3) {
        wrapper.append(Header(_=>{ render(root) }));
  } else if(state.page == 4) {
        wrapper.append(Buscar(_=>{ render(root) }));

  } else if(state.page == 5 ) {
        wrapper.append(BuscarLugar(_=>{ render(root) }));
  }else if(state.page == 6 ) {
        wrapper.append(BuscarClass(_=>{ render(root) }));
  }
  root.append(wrapper);
};

const state = {
  page: 4,
  data:{},
  rutasMo: null,
  rutasSis: null,
  clases:null,
  upcMonterrico: null
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
  state.rutasMo = json;
  });
  getJSON('/rutasSis', (err, json) => {
      state.rutasSis = json;
      console.log(state.rutasSis);
  });
  getJSON('/upcMonterrico', (err, json) => {
      state.upcMonterrico = json;
  });
  getJSON('/clases', (err, json) => {
      state.clases = json;
      console.log(state.clases);
  });

  const root = $('.root');
  render(root);

});
