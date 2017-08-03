'use strict';

const Login = (update) => {
	const section = $('<section id="login" class="container-fluid"></section>');

	const logo = $('<img src="assets/img/logo.png" alt="Logo Upc">');

	const contenedortitle = $('<div class="login__title row"></div>');
	const title = $('<h1 class="login__title--text col-xs-12">UPC GO!</h1>');

	const contenido = $('<div class="login__contenido row"></div>');

	const cajas = $('<div class="login__cajas col-xs-12"></div>');
	const codigoAlumno = $('<input type="text" class="contenido__codigo" placeholder="Código de Alumno"/>');
	const passwordAlumno = $('<input type="password" class="contenido__contraseña" placeholder="Contraseña"/>');

	const botones = $('<div class="login__botones col-xs-12"></div>');
	const btnIngresar = $('<button type="button" class="btn" name="button">Ingresar</button>');
	const btnFacebook = $('<button type="button" class="btn" name="button">Facebook</button>');
	const text = $('<p>* Olvidé contraseña</p>');

	contenedortitle.append(title);

	cajas
		.append(codigoAlumno)
		.append(passwordAlumno);

	botones
		.append(btnIngresar)
		.append(btnFacebook)
		.append(text);

	contenido
		.append(cajas)
		.append(botones);

	section
		.append(contenedortitle)
		.append(contenido)
		.append(logo);

	/*section.append(HeaderAll('Logeate',0,update));*/

	btnIngresar.on('click',(e) => {
		e.preventDefault();
		console.log('click');
		state.page = 2;
		update();
	});

	return section;
}

