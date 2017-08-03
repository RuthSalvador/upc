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



	monterrico.on('click',(e) => {
		e.preventDefault();
		getJSON('/rutasMo', (err, json) => {
			state.rutasMo = json;
			console.log(json.features);
			$.each(json.features, ( key, value ) =>  {
				console.log(value);
			};
		});
			/*
		getJSON('/upcMonterrico', (err, json) => {
			state.rutasMo = json;
			console.log(json.features);
		});*/

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
