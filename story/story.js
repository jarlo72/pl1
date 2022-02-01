function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 43.476176, lng: -80.524947 }
  });
  
  var locations = [
    [new google.maps.LatLng(43.472095, -80.537387), 'Shawerma Plus', 'Get the Falafal wrap jawads style'],
    [new google.maps.LatLng(43.476090, -80.525549), 'Mozys Shawarma', 'Infowindow content for Marker 2'],
    [new google.maps.LatLng(43.463116, -80.466321), 'Zay Zaman', 'Infowindow content for Marker 3'],
    [new google.maps.LatLng(43.469166, -80.484820), 'Arabesque', 'Infowindow content for Marker 4'],
  ];
  

  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < locations.length; i++) {

      var marker = new google.maps.Marker({
          position: locations[i][0],
          map: map,
          title: locations[i][1]
      });

      google.maps.event.addListener(marker, 'click', (function (marker, i) {

          return function () {
              infowindow.setContent(locations[i][2]);
              infowindow.open(map, marker);
          }

      })(marker, i));
  }

  // const contentString =
  //   '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   "</div>" +
  //   '<h1 id="firstHeading" class="firstHeading">Shawerma Plus</h1>' +
  //   '<div id="bodyContent">' +
  //   "<p>Get the Falafal wrap jawad's style</p>" +
  //   "</div>" +
  //   "</div>";
  
  // const infowindow = new google.maps.InfoWindow({
  //   content: contentString,
  // });

  // const marker = new google.maps.Marker({
  //   position: { lat: 43.472095, lng: -80.537387},
  //   map,
  //   title: "Shawerma Plus",
  // });

  // marker.addListener("click", () => {
  //   infowindow.open({
  //     anchor: marker,
  //     map,
  //     shouldFocus: false,
  //   });
  // });  
  
  directionsRenderer.setMap(map);
  directionsRenderer.setOptions( { suppressMarkers: true } );
  
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;
  const first = new google.maps.LatLng(43.476090, -80.525549);
  const second = new google.maps.LatLng(43.469166, -80.484820);
  
  directionsService
    .route({
      origin: { lat: 43.472095, lng: -80.537387},
      destination: {lat: 43.463116, lng: -80.466321},
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      waypoints: [{location: first},
        {location: second}],
      // optimizeWaypoints: true,
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}
