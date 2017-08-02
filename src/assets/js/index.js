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
  }else if(state.page == 2){
    wrapper.append(SegundaPantalla());
  }

  // switch(state.screenView) {
  // case null:
  // 	wrapper.append(Home(_ => render(root)));
  // 	break;
  // }

  root.append(wrapper);
};

const state = {
  page: 0,
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
