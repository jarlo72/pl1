function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 43.476176, lng: -80.524947 }
  });
  
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Shawerma Plus</h1>' +
    '<div id="bodyContent">' +
    "<p>Get the Falafal wrap jawad's style</p>" +
    "</div>" +
    "</div>";
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: { lat: 43.472095, lng: -80.537387},
    map,
    title: "Shawerma Plus",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });  
  
  directionsRenderer.setMap(map);
  // directionsDisplay.setMap(map);
  directionsRenderer.setOptions( { suppressMarkers: true } );
  
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;
  var first = new google.maps.LatLng(43.476, -80.525);
  var second = new google.maps.LatLng(43.469, -80.484);
  
  directionsService
    .route({
      origin: { lat: 43.472, lng: -80.537},
      destination: {lat: 43.463, lng: -80.466},
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      waypoints: [{location: first, stopover: false},
        {location: second, stopover: false}],
      // optimizeWaypoints: true,
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}
