'use strict';

const Sedes = (update) => {
	const section = $('<section id="sedes" class="container-fluid"></section>');

	const contenedortitle = $('<div class="sede__title row"></div>');
	const title 					= $('<h1 class="sede__title--text col-xs-12 text-center">Elige la sede</h1>');

	const sedes = $('<div class="sede__contenido row"></div>');

	const monterrico = $('<div class="sede--Monterrico col-xs-12 col-sm-6"><p>Campus Monterrico</p></div>');
	const sanIsidro	 = $('<div class="sede--SanIsidro col-xs-12 col-sm-6"><p>Campus San Isidro</p></div>');
	const villa 		 = $('<div class="sede--Villa col-xs-12 col-sm-6"><p>Campus Villa</p></div>');
	const sMiguel 	 = $('<div class="sede--SanMiguel col-xs-12 col-sm-6"><p>Campus San Miguel</p></div>');


	const sede = (campus, urlSede) => {
	  campus.on('click',(e) => {
		  e.preventDefault();
		  getJSON(urlSede, (err, json) => {
			//state.upcSede = json.features;
			state.origenLat = json.features[0].geometry.coordinates[0];
			state.origenLong = json.features[0].geometry.coordinates[1];

			console.log(state.origenLat);
			console.log(state.origenLong);
		  });

		  state.page = 2;
		  update();
	  });
  	};

	sede(monterrico,'/upcMonterrico');
	sede(sanIsidro,'/upcSis');

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
