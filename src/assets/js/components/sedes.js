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


	const sede = (campus, urlRuta, urlSede) => {
	  campus.on('click',(e) => {
      e.preventDefault();
      getJSON(urlRuta, (err, json) => {
        state.rutasSede = json;
        $.each(json.features, ( key, value ) =>  {
          console.log(value.geometry.coordinates);
        });
      });
      getJSON(urlSede, (err, json) => {
        state.upcSede = json;
        $.each(json.features, ( key, value ) =>  {
          console.log(value.geometry.coordinates);
          console.log(state.upcSede.geometry.coordinates);

        });
      });

      state.page = 2;
      update();

    });

  };

	sede(monterrico,'/rutasMo','/upcMonterrico');
	sede(sanIsidro,'/rutasSis','/upcSis');

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
