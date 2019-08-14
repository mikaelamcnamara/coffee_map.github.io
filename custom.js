function beforeMapLoads(){
	// Define map
	const myMap = L.map('map');

	// Load the basemap
	const myBasemap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	})

	// Add basemap to map id
	myBasemap.addTo(myMap)

	// Set view of the map
	myMap.setView([-33.7932, 151.2876], 14);

	// Define cafe icon
	const coffeeCup = L.icon({
	iconUrl: 'coffee-cup.png',
	shadowUrl: '',
	iconSize: [20, 20]
	});

	// Make an XMLHttpRequest to the JSON data
	const request = new XMLHttpRequest()
	request.open('GET', 'cafe.json', true)

	request.onload = function () {
	// begin accessing JSON data here
	const data = JSON.parse(this.response)

	// Print cafe markers
	const cafes = data.cafes.map(cafe => {
		console.log(cafe.name);

		L.marker([cafe.lat, cafe.long], {
		icon: coffeeCup
		}).bindPopup(`
			<h2>${cafe.name}</h2>
			<p><b>Vibe:</b> ${cafe.ambiance}</p>
			<p><b>Rating:</b> ${cafe.rating}</p>
			<p><b>Comments:</b> ${cafe.comments}</p>
		`).openPopup().addTo(myMap);
	});

	const newcafes = data.cafes.map(cafe => {
		console.log(cafe.name);

		L.marker([cafe.lat, cafe.long], {
		icon: coffeeCup
		}).bindPopup(`
			<h2>${cafe.name}</h2>
			<p><b>Vibe:</b> ${cafe.ambiance}</p>
			<p><b>Rating:</b> ${cafe.rating}</p>
			<p><b>Comments:</b> ${cafe.comments}</p>
		`).openPopup().addTo(myMap);
	});

	}
request.send();

}

function afterMapLoads(){
	// This function is run after the map has loaded. It gives access to bootleaf.map, bootleaf.TOCcontrol, etc
	
	// Check to see whether the Gray basemap is chosen, and the user has zoomed in too far. In this case, 
	// switch to the Streets basemap
	bootleaf.map.on("zoomend", function(evt){
		if (bootleaf.currentBasemap === 'Gray'){
			if (evt.target._zoom >= 17) {
				setBasemap({"type": 'esri', "id": 'Streets'});
				$.growl.warning({ title: "Basemap change", message: "The grayscale basemap is not available at this scale"});
			}
		}
	});

	// Detect the coordinates of the address returned by the geocoder. This can be used elsewhere as required
	bootleaf.leafletGeocoder.on("markgeocode", function(evt){
		console.log("Coordinates: ", evt.geocode.center.lat, ", ", evt.geocode.center.lng);
	});
}
