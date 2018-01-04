var map;

document.addEventListener("deviceready", function () {
       navigator.splashscreen.hide();

    loadPage("html/markerPage.html");
    var div = document.getElementById("map");
    // Initialize the map view
    map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

    map.on(plugin.google.maps.event.MAP_CLICK, function (latLng) {
        openMarkerAddPage();
    });

    $("#list").on("click", function (event) {
        $.get("html/list.html", function (data) {
            $('.navbar-collapse').collapse('hide');
            $("#maincontent").html(data);
            showMainContent();
        });
    });

    $("#mapIcon, #mapButton").on("click", function (event) {
        showMap();
    });
    
    $('body').on('click', "#showMap", function (event) {
        showMap();
    });
}, false);

function onMapReady() {
     map.addMarker({
        position: {lat: 37.422359, lng: -122.084344},
        title: "man",
        snippet: "This plugin is awesome!",
        animation: plugin.google.maps.Animation.BOUNCE,
        id: 1
    }, function (marker) {
        marker.showInfoWindow();

        marker.on(plugin.google.maps.event.INFO_CLICK, function () {
            $.ajax({
                url: "html/markerPage.html",
                cache: false
            }).done(function (html) {
                $('#maincontent').html(html);
                $("#map").hide();
                $('#mainContainer').show();
            });
        });
    });
}

function openMarkerAddPage(latLng) {
    loadPage('html/addMarker.html');
}

function loadPage(page) {
    $.get(page, function (data) {
        $('.navbar-collapse').collapse('hide');
        $("#maincontent").html(data);
        showMainContent();
    });
}

function hide() {
    $("#inputFields").animate({
        height: "toggle"
    }, 400, function () {
        // Animation complete.
    });
}

function showMainContent() {
    $("#map").hide();
    $("#mainContainer").show();
}

function showMap() {
    $('.navbar-collapse').collapse('hide');
    $("#mainContainer").hide();
    $("#map").show();
}