'use strict';

const Buscar = (update) => {
    const box = $('<div class=""></div>');
    const btn = $('<button type="submit" id="buscar"class="btn btn-primary ">¿A dónde quieres ir?</button>');
    const img = $('<img src="assets/img/lupa.png" alt ="lupa ">');
    btn.append(img);
    box.append(btn);
    btn.on('click', (e) => {
        e.preventDefault();
        state.page = 5;
        update();
    })
    return box;
}
