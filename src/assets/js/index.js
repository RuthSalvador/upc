'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Resultado(_=>{ render(root) }));
  }

  root.append(wrapper);
};

const state = {
  page: 0,
  data:{}
};

$( _ => {
  const root = $("#root");
  render(root);
});