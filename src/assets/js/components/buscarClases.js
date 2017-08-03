'use strict';

const classItem = (classes, update)  => {
    const item = $('<div class="item"></div>');
    const nam = $('<p class="p-clase">'+classes.nombre+'</p>');
    const small = $('<br><small>'+classes.horario+'</small>');
    const images = $('<img src="'+classes.src+'">');

    item.append(images);
    item.append(nam,small);

    return item;
}

const reRenderClass = (sectionList, result, update) => {
    sectionList.empty();
    result.forEach((classes) => {
        sectionList.append(classItem(classes, update));
    });
};


const BuscarClass = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div id="map-clases" class="map"></div>');

  const lugar     = $('<div id="buscarLugar" ></div>');
  const secSearch = $('<section id="search"></section>');
  const secClass  = $('<section id="clase"></section>');
  const secOther  = $('<section id="places"></section>');

  const container = $('<div class="container container-buscar" id="ir-clases"></div>');
  const boxImg    = $('<div class="col-xs-2 "></div>');
  const img       = $('<img src="assets/img/reserva.png" alt="ir a clases">');
  const boxText   = $('<div class="col-xs-9"></div>');
  const parr      = $('<p>Volver a principales lugares</p>');
  const span      = $('<span>Top lugares en campus</span>');
  const boxArrow    = $('<div class="col-xs-1"></div>');
  const icon      = $('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');

  const containerGo = $('<div class="container"></div>');
  const boxArrowLeft    = $('<div class="col-xs-12"></div>');
  const iconLeft      = $('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
  const boxImgGo    = $('<div class="col-xs-2 "></div>');
  const imgGo      = $('<img class="" src="assets/img/go.png" alt="ir a clases">');
  const boxTextGo  = $('<div class="col-xs-10"></div>');
  const inputOrigin = $('<input type="text" name="" value="Puerta de ingreso 1">');
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

  section.append(Header(update));
  section.append(lugar);
  section.append(divMap);

  inputDestino.on('keyup',(e) => {
      let filtersClases = filterByClass(state.clases.clases,inputDestino.val());
      reRenderClass(secOther,filtersClases,update);
  });


  container.on('click',(e)=>{
    e.preventDefault();
    state.page = 4;
    update();
  });

  iconLeft.on('click', (e)=> {
    e.preventDefault();
    state.page = 3;
    update();
  });

  let list = state.clases.clases;
  reRenderClass( secOther, list, update);
  return section;
};
