'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	if(state.user == null){
    	wrapper.append(Login(_=>{ render(root) }));
	}else {
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
	user: null,
	status: null,
	page: 1,
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
  	state.doRender = render.bind(null,root);
  });
});
