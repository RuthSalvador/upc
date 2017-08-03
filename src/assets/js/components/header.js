'use strict'
const Header = (update) => {
    const principal     = $('<header></header>');

    const arrowLeft     = $('<div class="pull-left hidden-xs"></div>');
    const userImg       = $('<img src="assets/img/avatar.png" alt="usuario alumno">')
    const user          = $('<p class="estudiante">Hola <span id="student">Javier</span></p>');

    const arrowRight    = $('<div class="pull-right"></div>');
    const ubicar        = $('<img src="assets/img/ubicacion-cabecera.png" alt="signo de ubicación" class="hidden-xs">');
    const namePrincipal = $('<h3>UPC GO! </h3>');
    const logoRed       = $('<img src="assets/img/logo.png" alt="logo upc rojo" class="hidden-sm hidden-md hidden-lg">');
    const logoWhite     =$('<img src="assets/img/crisol.png" alt="logo upc blanco" class="hidden-xs">');

    arrowLeft.append(userImg);
    arrowLeft.append(user);

    arrowRight.append(ubicar);
    arrowRight.append(namePrincipal);
    arrowRight.append(logoRed);
    arrowRight.append(logoWhite);

    principal.append(arrowLeft);
    principal.append(arrowRight);
    return principal;
}
