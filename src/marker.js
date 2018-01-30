const {Marker} = require("mapbox-gl");

module.exports = 
  function buildMarker(markerType, coords){
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

    return new Marker(icon).setLngLat(coords);
  }
