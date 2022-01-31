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
    position: "ChIJ816IxAb0K4gRYpbXJOgIt1Y",
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
      origin: {"Shawerma Plus, Waterloo, ON"},
      destination: {"Arabesque, Waterloo, ON"},
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      waypoints: [
        { location: "Mozy's Shawarma, Waterloo, ON" },
        { location: "Zay Zaman Restaurant, Waterloo, ON" },
      ],
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}
