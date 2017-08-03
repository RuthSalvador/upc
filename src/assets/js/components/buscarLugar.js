'use strict';

const searchItem = (places, update)  => {
    const item   = $('<div class="item"></div>');
    const link   = $('<a href=""></a>')
    const nam    = $('<p>'+places.properties.Name+'</p>');
    const images = $('<img src="'+places.properties.src+'" alt="'+places.properties.Name+'">');
    link.append(images);
    link.append(nam);
    item.append(link);

    return item;
}


const reRender = (sectionList, result, update) => {
    sectionList.empty();
    result.forEach((places) => {
        sectionList.append(searchItem(places, update));
    });
};


const BuscarLugar = (update) => {
    const lugar     = $('<div id="buscarLugar" ></div>');
    const secSearch = $('<section id="search"></section>');
    const secClass  = $('<section id="clase"></section>');
    const secOther  = $('<section id="places"></section>');

    const container = $('<div class="container"></div>');
    const boxImg    = $('<div class="col-xs-2 "></div>');
    const img       = $('<img src="assets/img/reserva.png"> alt="ir a clases"');
    const boxText   = $('<div class="col-xs-9"></div>')
    const parr      = $('<p>Quiero ir a mis clases</p>');
    const span      = $('<span>Sincronizado con tu horario</span>');
    const boxArrow    = $('<div class="col-xs-1"></div>');
    const icon      = $('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');

    boxImg.append(img);
    boxText.append(parr);
    boxText.append(span);
    boxArrow.append(icon);
    container.append(boxImg);
    container.append(boxText);
    container.append(boxArrow);
    secClass.append(container);

    lugar.append(secSearch);
    lugar.append(secClass);
    lugar.append(secOther);

    let list = state.upcMonterrico.features;
    reRender( secOther, list, update);
    return lugar;
}
