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

const BuscarLugar = (update) => {
    const lugar         = $('<div id="buscarLugar" ></div>');
    const secSearch = $('<section id="search"></section>');
    const secClass  = $('<section id="clase"></section>');
    const secOther  = $('<section id="places"></section>');

    lugar.append(secSearch);
    lugar.append(secClass);
    lugar.append(secOther);
    return lugar;
}
