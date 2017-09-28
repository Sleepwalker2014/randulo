function onDeviceReady() {
    alert("Muh");
    var div = document.getElementById("map_canvas");

    // Initialize the map view
    var map = plugin.google.maps.Map.getMap(div);
}