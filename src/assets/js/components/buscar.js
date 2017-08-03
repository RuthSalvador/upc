'use strict';

const Buscar = (update) => {
    const box = $('<div class="hidden-sm hidden-md hidden-lg"></div>');
    const btn = $('<button type="submit" id="buscar"class="btn btn-primary ">¿A dónde quieres ir?</button>');
    const span = $('<span class="glyphicon glyphicon-search"></span>');
    btn.append(span);
    box.append(btn);
    btn.on('click', (e) => {
        e.preventDefault();
        state.page = 5;
        update();
    })

    return box;
}
