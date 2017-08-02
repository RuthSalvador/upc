var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');

	// switch(state.screenView) {
	// case null:
	// 	wrapper.append(Home(_ => render(root)));
	// 	break;
	// }
  root.append(wrapper);
}

var state = {
  rutasMo: null,
	screenView: null
}

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
  state.rutasMo = json;
  console.log(state.rutasMo);
  var root = $('.root');
  render(root);
  });
});
