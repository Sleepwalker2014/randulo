var map;

document.addEventListener("deviceready", function () {

    yOffset = 0;
    positionOffset = 0;

    var div = document.getElementById("map");
    // Initialize the map view
    map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

    $("#list").on("click", function (event) {
        $.get("html/list.html", function (data) {
            $('.navbar-toggle').click()
            $("#maincontent").html(data);
            $("#map").hide();
            $("#mainContainer").show();
        });
    });

    $("#mapIcon").on("click", function (event) {
        $('.navbar-toggle').click()
        $.get("html/list.html", function (data) {
            $("#mainContainer").hide();
            $("#map").show();
        });
    });

}, false);

function onMapReady() {
    map.addMarker({
        position: {lat: 37.422359, lng: -122.084344},
        title: "man",
        snippet: "This plugin is awesome!",
        animation: plugin.google.maps.Animation.BOUNCE
    }, function (marker) {
        marker.showInfoWindow();

        marker.on(plugin.google.maps.event.INFO_CLICK, function () {

        });
    });
    
        map.addMarker({
        position: {lat: 32.422359, lng: -122.084344},
        title: "fart",
        snippet: "This plugin is awesome!",
        animation: plugin.google.maps.Animation.BOUNCE
    }, function (marker) {
        marker.showInfoWindow();

        marker.on(plugin.google.maps.event.INFO_CLICK, function () {

        });
    });
}

function hide() {
    $("#inputFields").animate({
        height: "toggle"
    }, 400, function () {
        // Animation complete.
    });
}