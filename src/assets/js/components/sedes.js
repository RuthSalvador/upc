'use strict';

const Sedes = () => {
	const section = $('<section id="sedes" class="container-fluid"></section>');

	const contenedortitle = $('<div class="sede__title row"></div>');
	const title = $('<h1 class="sede__title--text col-xs-12 text-center">Elige la sede</h1>');

	const sedes = $('<div class="sede__contenido row"></div>');

	const sede1 = $('<div class="sede--Monterrico col-xs-12 col-sm-6"></div>');
	const sede2 = $('<div class="sede--SanIsidro col-xs-12 col-sm-6"></div>');
	const sede3 = $('<div class="sede--Villa col-xs-12 col-sm-6"></div>');
	const sede4 = $('<div class="sede--SanMiguel col-xs-12 col-sm-6"></div>');


	contenedortitle.append(title);

	sedes
		.append(sede1)
		.append(sede2)
		.append(sede3)
		.append(sede4);

	section
		.append(Header())
		.append(contenedortitle)
		.append(sedes);


	/*section.append(HeaderAll('Logeate',0,update));*/


	return section;
};
