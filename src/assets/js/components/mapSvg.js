'use strict';

const MapaSvg = (update) => {
  const section = $('<section></section>');
  var divMap  = $(`<div id="map-exa" class="map"></div>`);
  var svg = `<svg xmlns="http://www.w3.org/2000/svg" version='1.1' width="100%" height="100%" >`;

  section.append(divMap);

  const line = `<line id="" x1='700' y1="400" x2='700' y2='340' style='stroke:blue;stroke-width:5'/>`;
  divMap.append(svg);
  //svg.append(line);

  return section;

};


