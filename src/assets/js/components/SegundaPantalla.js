'use strict';

const SegundaPantalla = () => {
	const section = $('<section>Hola SEGUNDA PANTALLA</section>');

	if(state.user){
		const name = $('<h1>state.user.name</h1>');
		const email = $('<p>state.user.email</p>');

		section
			.append(name)
			.append(email);

		const logout = $('<button>Salir</button>');

		logout.on('click',_ =>{
			FB.logout(response => {
				state.user = null;
				state.doRender();
			});
		});

		section.append(logout);
	}

	return section;
};
