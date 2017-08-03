'use strict';

const filterByPlace = (places,query) => {
		return places.filter((place) => {
			return place.toLowerCase().indexOf(query.toLowerCase()) != -1;
		});
}
