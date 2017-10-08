document.addEventListener("deviceready", function() {
var div = document.getElementById("map");
    // Initialize the map view
var  map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

    element1 = document.getElementById("overlayDiv");
    element1.addEventListener("click", fullscreen)
}, false);


function onMapReady() {

}

function fullscreen () {
    var height = '100px';
    element1 = document.getElementById("overlayDiv");
    var currentHeight = element1.style.height;

    if (currentHeight == "100px") {
        height = '100%';
    }
    element1.style.height = height;
}