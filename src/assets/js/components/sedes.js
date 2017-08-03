'use strict';

const Sedes = () => {
	const section = $('<section id="sedes" class="container-fluid"></section>');

	const contenedortitle = $('<div class="sede__title row"></div>');
	const title = $('<h1 class="sede__title--text col-xs-12 text-center">Elige la sede</h1>');

	const sedes = $('<div class="sede__contenido row"></div>');

	const monterrico = $('<div class="sede--Monterrico col-xs-12 col-sm-6"><p>Campus Monterrico</p></div>');
	const sanIsidro = $('<div class="sede--SanIsidro col-xs-12 col-sm-6"><p>Campus San Isidro</p></div>');
	const villa = $('<div class="sede--Villa col-xs-12 col-sm-6"><p>Campus Villa</p></div>');
	const sMiguel = $('<div class="sede--SanMiguel col-xs-12 col-sm-6"><p>Campus San Miguel</p></div>');

/*
	btn.on('click',function (e) {
		e.preventDefault();

		$.post('/api/registerNumber',{
			phone: input.val(),
			terms: $("#terminos").is(':checked')
		},function(response){
			if (response.success) {
				state.screen = "pantalla3";
				state.phone = response.data.phone;
				state.code = response.data.code;
				console.log(response.success);
				console.log('Codigo: ' + response.data.code);
				update();
			} else {
				state.screen = "pantalla2";
				message.text("response.message");
				console.log(response.message);
				update();
			}
		});
	});
	*/

	monterrico.on('click',(e) => {
		getJSON('/rutasMo', (err, json) => {
			state.rutasMo = json;
			console.log(json.features);
		});
		getJSON('/upcMonterrico', (err, json) => {
			state.rutasMo = json;
			console.log(json.features);
		});
		e.preventDefault();
		//state.page = 2;
		//update();
	});

	sanIsidro.on('click',(e) => {
		getJSON('/rutasSis', (err, json) => {
			state.rutasSis = json;
			console.log(state.rutasSis);
		});
		getJSON('/upcSis', (err, json) => {
			state.rutasSis = json;
			console.log(state.rutasSis);
		});
		e.preventDefault();
		//state.page = 2;
		//update();
	});


	contenedortitle.append(title);

	sedes
		.append(monterrico)
		.append(sanIsidro)
		.append(villa)
		.append(sMiguel);

	section
		.append(Header())
		.append(contenedortitle)
		.append(sedes);


	/*section.append(HeaderAll('Logeate',0,update));*/


	return section;
};
