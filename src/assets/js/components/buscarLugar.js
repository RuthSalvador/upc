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

  const container = $('<div class="container"></div>');
  const boxImg    = $('<div class="col-xs-2 "></div>');
  const img       = $('<img src="assets/img/reserva.png"> alt="ir a clases"');
  const boxText   = $('<div class="col-xs-9"></div>')
  const parr      = $('<p>Quiero ir a mis clases</p>');
  const span      = $('<span>Sincronizado con tu horario</span>');
  const boxArrow    = $('<div class="col-xs-1"></div>');
  const icon      = $('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');

  const containerGo = $('<div class="container"></div>');
  const boxArrowLeft    = $('<div class="col-xs-12"></div>');
  const iconLeft      = $('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
  const boxImgGo    = $('<div class="col-xs-2 "></div>');
  const imgGo      = $('<img class="" src="assets/img/go.png"> alt="ir a clases"');
  const boxTextGo  = $('<div class="col-xs-10"></div>');
  const inputOrigin = $('<input type="text" name="" value="">');
  const inputDestino = $('<input type="text" name="" value="" placeholder="¿A donde quieres ir?">');

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

  let list = state.upcMonterrico.features;
  reRender( secOther, list, update);
  return lugar;
}
