'use strict';

const filterByPlace = (places,query) => {
		return places.filter((place) => {
      console.log(place);
			return place.nombre.toLowerCase().indexOf(query.toLowerCase()) != -1;
		});
}
