// $.ajax({
//     url: "/api/sighting",
//     method: "GET"
// }).then(function (data) {
//     console.log(data)
//     var locations = [];
//     for (let i = 0; i < data.length; i++) {
//         currentlocation = [`${data[i].latitude}`,
//         data[i].longitude];
//         locations.push(currentlocation)
//     }
//     console.log(locations);
// })
// var infowindow = new google.maps.InfoWindow();
// var marker, i;
// for (i = 0; i < locations.length; i++) {
//     var image = {
//         url: locations[i][3],
//         size: new google.maps.Size(50, 50),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(10, 34),
//     };
//     var shape = {
//         coords: [1, 1, 1, 20, 18, 20, 18, 1],
//         type: 'poly'
//     };
//     marker = new google.maps.Marker({
//         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//         map: map
//     });
//     google.maps.event.addListener(marker, 'click', (function (marker, i) {
//         return function () {
//             infowindow.setContent(locations[i][0]);
//             infowindow.open(map, marker);
//         }
//     })(marker, i));
// }





// .then(function (response){
// // console.log(response)
// // let coords = { 
// //     lat: response.latitude,
// //     lon: response.longitude
// // }
// // });
