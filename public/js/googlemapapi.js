"use strict";

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 39.1299577,
            lng: -96.44058
        },
        zoom: 4.4
    });
}