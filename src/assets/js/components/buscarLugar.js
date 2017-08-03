'use strict';

const searchItem = (places, update)  => {
    const item = $('<div class="item"></div>');
    const nam = $('<p>'+places.properties.Name+'</p>');
    const images = $('<img src="'+places.properties.src+'">');
    // const adrss= $('<h6>'+station.address+'</h6>');
    // const district = $('<h6>'+station.district+'</h6>');
    // const icon = $('<i class="fa fa-map" aria-hidden="true"></i>');

    item.append(images);
    item.append(nam);
    // item.append(adrss);
    // item.append(district);
    // item.append(icon);

    // icon.on('click', (e) => {
    //     e.preventDefault();
    //     state.selectedStation = station;
    //     update();
    //     showMap(state.selectedStation.lat, state.selectedStation.long);
    // })
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

    lugar.append(secSearch);
    lugar.append(secClass);
    lugar.append(secOther);

    let list = state.upcMonterrico.features;
    reRender( secOther, list, update);

    return lugar;
}
