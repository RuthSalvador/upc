'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	if(state.page == 1){
		wrapper.append(Login(_=>{ render(root) }));
	}else if(state.page == 2){
		wrapper.append(SegundaPantalla());
	}
	root.append(wrapper);
};
const state = {
	page: 1
};

$( _ => {
	const root = $("#root");
	render(root);
});