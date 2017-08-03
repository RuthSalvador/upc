'use strict';

const filterByClass = (classes,query) => {

		return classes.filter((clase) => {

			return clase.nombre.toLowerCase().indexOf(query.toLowerCase()) != -1;
		})
};
const filterByPlace = (places,query) => {

  return places.filter((place) => {
    console.log(place);
    return place.properties.Name.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

};