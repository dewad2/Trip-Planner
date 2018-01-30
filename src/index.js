console.log('here in index.js, running Javascriiipt')
const mapboxgl = require("mapbox-gl");
const {buildMarker} = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWRld2FhbCIsImEiOiJjamQxdWtnNDUwaWU5MzNxZGRsOGw1dTN3In0.ZPZYioFsfTn1fNFC1a8v6w';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("restaurant", [-74.009151, 40.705086]).addTo(map);


