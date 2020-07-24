"use strict";
var locations = [];
let map;
$.ajax({
    url: "/api/sighting",
    method: "GET"
}).then(function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        var currentlocation = [];
        currentlocation = [`${data[i].latitude}`, data[i].longitude];
        locations.push(currentlocation)
    } return locations;
    // console.log(locations);
}).then(function (locations) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 39.1299577,
            lng: -96.44058
        },
        zoom: 4.4

    }); console.log(locations);

    for (i = 0; i < locations.length; i++) {
  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
})

// var infowindow = new google.maps.InfoWindow();
var marker, i;
