var config = {
	"title": "Bootleaf template map",
	"start": {
		// "maxZoom": 16,
		"center": [38.203,-99.799],
		"zoom": 4,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "Bootleaf application template",
		"contents": "<p>This is an open-source version of the excellent <a href='https://github.com/bmcbride/bootleaf'>Bootleaf map </a>started by Bryan McBride.</p><p>It's designed for rapid web map development. See <a href='https://github.com/iag-geo/bootleaf'>https://github.com/iag-geo/bootleaf</a> for more information.</p><p>Chage this message in the config file</p>"
	},
	"controls": {
		"zoom": {
			"position": "topleft"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "Harmony",
			"suffix": "Australia"
		},
		"TOC": {
			//http://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"sortLayers": false,
			"uncategorisedLabel": "Layers",
			"toggleAll": true
		},
		"history": {
			"position": "bottomleft"
		},
		"bookmarks": {
			"position": "bottomright",
			"places": [
				{
				"latlng": [
					40.7916, -73.9924
				],
				"zoom": 12,
				"name": "Test",
				"id": "a148fa354ba3",
				"editable": true,
				"removable": true
				}
			]
		}
	},
	// "activeTool": "identify", // options are identify/coordinates/queryWidget
	"basemaps": ['esriGray', 'esriDarkGray', 'esriStreets', 'OpenStreetMap', "Aerial"],
	"bing_key": "enter your Bing Maps key",
	"mapboxKey": "enter your MapBox key",
	// "defaultIcon": {
	// 	"imagePath": "http://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [
		{
			"name": "GeoJSON layers",
			"layers": ["theatres", "museums", "us_density"]
		}
	],
	"projections": [
		{4269: '+proj=longlat +ellps=GRS80 +datum=NAD83 +no_defs '}
	],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [
	{
    "id": "theatres",
    "name": "Theatres",
    "dataType": "jsonp",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/theatres.geojson",
    "icon": {
        "iconUrl": "./img/theater.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},
	{
    "id": "museums",
    "dataType": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/museums.geojson",
    "style": {
        "stroke": true,
        "fillColor": "#00FFFF",
        "fillOpacity": 0.5,
        "radius": 10,
        "weight": 0.5,
        "opacity": 1,
        "color": '#727272'
		  },
		  "icon": {
		      "iconUrl": "./img/museum.png",
		      "iconSize": [24,28]
		  },
		  "visible": false,
		  // "label": {
		  // 	"name": "NAME",
		  // 	"minZoom": 14
		  // }
		}
	]
}
