document.addEventListener("deviceready", function () {
    var div = document.getElementById("map");
    // Initialize the map view
    var map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

    element2 = document.getElementById("bomb");
    element2.addEventListener("click", hide);

    $(".doubleLineHeight").mousemove(function (e) {
        $(this).height(e.pageY);
    });
}, false);

function onMapReady () {

}

function hide () {
    $("#inputFields").animate({
        height: "toggle"
    }, 400, function () {
        // Animation complete.
    });
}