'use strict';

const searchItem = (places, update)  => {
    const item   = $('<div class="item"></div>');
    const link   = $('<a href=""></a>');
    const nam    = $('<p>'+places.properties.Name+'</p>');
    const images = $('<img src="'+places.properties.src+'" alt="'+places.properties.Name+'">');
    //console.log(places.geometry.coordinates[1]);
    link.append(images);
    link.append(nam);
    item.append(link);

    link.on('click',(e)=>{
      e.preventDefault();
      state.page = 5;
      state.destinoLat = places.geometry.coordinates[1];
      state.destinoLong = places.geometry.coordinates[0];
      state.dataPlaces = places.properties;

      update();
    });

    return item;

};


const reRender = (sectionList, result, update) => {
    sectionList.empty();
    result.forEach((places) => {
        sectionList.append(searchItem(places, update));
    });
};


const BuscarLugar = (update) => {
    const section = $('<section></section>');
    const lugar = $('<div id="buscarLugar" ></div>');
    const divMap  = $('<div id="map-lugar" class="map hidden-xs"></div>');


  const secSearch = $('<section id="search"></section>');
    const secClass = $('<section id="clase"></section>');
    const secOther = $('<section id="places"></section>');

    const container     = $('<div class="container container-buscar" id="ir-clases"></div>');
    const boxImg        = $('<div class="col-xs-2 "></div>');
    const img           = $('<img src="assets/img/reserva.png" alt="ir a clases">');
    const boxText       = $('<div class="col-xs-9"></div>');
    const parr          = $('<p>Quiero ir a mis clases</p>');
    const span          = $('<span>Sincronizado con tu horario</span>');
    const boxArrow      = $('<div class="col-xs-1"></div>');
    const icon          = $('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');

    const containerGo   = $('<div class="container"></div>');
    const boxArrowLeft  = $('<div class="col-xs-12"></div>');
    const iconLeft      = $('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
    const boxImgGo      = $('<div class="col-xs-2 "></div>');
    const imgGo         = $('<img class="" src="assets/img/go.png" alt="ir a clases">');
    const boxTextGo     = $('<div class="col-xs-10"></div>');
    const inputOrigin   = $('<input type="text" value="Puerta de ingreso 1" id="origen">');
    const inputDestino  = $('<input type="text" value="" id="destino" placeholder=" ¿A dónde quieres ir?">');

    boxImgGo.append(imgGo);
    boxTextGo.append(inputOrigin,inputDestino);
    boxImg.append(img);
    boxText.append(parr,span);
    boxArrowLeft.append(iconLeft);
    boxArrow.append(icon);

    container.append(boxImg,boxText,boxArrow);
    containerGo.append(boxArrowLeft,boxImgGo,boxTextGo);

    secSearch.append(containerGo);
    secClass.append(container);

    lugar.append(secSearch);
    lugar.append(secClass);
    lugar.append(secOther);

    section.append(Header(update));
    section.append(lugar);
    section.append(divMap);

    inputDestino.on('keyup',(e) => {
      console.log(state.upcSede);
      let filtersClases = filterByPlace(state.upcSede,inputDestino.val());
      reRender(secOther,filtersClases,update);
    });


    container.on('click', (e)=> {
      e.preventDefault();
      state.page = 4;
      update();
    });

    iconLeft.on('click', (e)=> {
        e.preventDefault();
        state.page = 2;
        update();
    });

    $('#ir-clases').on('click',(e)=>{
      e.preventDefault();
      state.page = 5;
      update();
    });
    let list = state.upcSede;
    reRender( secOther, list, update);
    return section;
};