document.addEventListener("deviceready", function () {
    yOffset = 0;
    positionOffset = 0;

    var div = document.getElementById("map");
    // Initialize the map view
    var map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

    $(".doubleLineHeight").on("touchmove", function (event) {
         var newPosition = positionOffset + (event.targetTouches[0].pageY - yOffset);

         if (newPosition < 0) {
             return false;
         }

        $(this).css({top: newPosition});
    });

    $(".doubleLineHeight").on("touchstart", function (event) {
        yOffset = event.targetTouches[0].pageY;
        var pos =  $(this).position();
        positionOffset = pos.top;
    });
}, false);

function onMapReady() {

}

function hide() {
    $("#inputFields").animate({
        height: "toggle"
    }, 400, function () {
        // Animation complete.
    });
}