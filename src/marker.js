const mapboxgl = require("mapbox-gl");

module.exports = {
  buildMarker: function(markerType, coords){
    console.log('we got here!');
    let icon = document.createElement("div");

    icon.style.width = "32px";
    icon.style.height = "39px";

    switch (markerType) {
      case 'hotel':
        icon.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        break;
      case 'restaurant':
        icon.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        break;
      default:
        icon.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    return new mapboxgl.Marker(icon).setLngLat(coords);
  }
}
