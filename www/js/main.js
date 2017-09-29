document.addEventListener("deviceready", function() {
    alert("muh");
   var div = document.getElementById("map");

    // Initialize the map view
var  map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);


function onMapReady() {
   alert("yeha");
}