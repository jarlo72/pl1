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
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;

  directionsService
    .route({
      origin: {lat: 43.472095, lng: -80.537387},
      destination: {lat: 43.463241, lng: -80.466575},
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      waypoints: [
        { location: lat: 43.476090, lng: -80.525549 },
        { location: lat: 43.469166, lng: -80.484820 },],
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}
