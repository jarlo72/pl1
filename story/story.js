// Primary template used is from Google Maps Javascript API, Travel Modes in Directions 
// to make use of the direction services
// https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes#maps_directions_travel_modes-javascript

function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 43.476176, lng: -80.524947 }
  });
  
  // Info window inspired and edited from template in Google Maps Javascript API
  // https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple-max
  // and 
  const contentString1 =
    '<h2>Shawerma Plus</h2>' +
    '<div id="bodyContent">' +
    "<p>Known for their '2  for $9.99 Chicken Shawarma Wraps'. "+
    "My personal recommendation is their <b>Falafal wrap Jawad's style</b></p>" +
    "<p>See their menu here at: <a href='https://shawermaplus.com/'>" +
    "Shawerma Plus</a></p>"+
    "</div>";
    
  const contentString2 =
    "<h2>Mozy's Shawarma</h2>" +
    '<div id="bodyContent">' +
    "<p>Known for their distinctive chicken taste and abundance of garlic sauce. "+
    "My personal recommendation is their <b>Full flavour Shawarma Wrap, with turnips and extra garlic sauce.</b> "+
    "However, if you're up for it, the shawarma plate will you up the entire day</p>" +
    "<p>See their menu here at: <a href='http://mozys.ca/'>" +
    "Mozy;s Shawarma</a></p>"+
    "</div>";

  const contentString3 =
    '<h2>Zay Zaman Restaurant</h2>' +
    '<div id="bodyContent">' +
    "<p>Known for their incredible saj shawarma wraps and hot sauce. "+
    "My personal recommendation is their <b>Zay Zaman Shawarma Plate</b> to share</p>" +
    "<p>See their menu here at: <a href='https://www.skipthedishes.com/zay-zaman-restaurant'>" +
    "Zay Zaman Restaurant</a></p>"+
    "</div>";

  const contentString4 =
    '<h2>Arabesque</h2>' +
    '<div id="bodyContent">' +
    "<p>Though not shawarma, they do a great dip platter with fresh bread "+
    "and Manaeesh, arabic style pizza. My recommendation is the <b>muhammarah dip and Manaeesh</b></p>" +
    "<p>See their menu here at: <a href='https://www.arabesquecafekw.com/menu'>" +
    "Arabesque</a></p>"+
    "</div>";

  const locations = [
    [new google.maps.LatLng(43.472095, -80.537387), "Shawerma Plus", contentString1],
    [new google.maps.LatLng(43.476090, -80.525549), "Mozy's Shawarma", contentString2],
    [new google.maps.LatLng(43.469166, -80.484820), "Zay Zaman Restaurant", contentString3],
    [new google.maps.LatLng(43.463116, -80.466321), "Arabesque", contentString4],
  ];

  const infowindow = new google.maps.InfoWindow({
    maxWidth: 200,
  });

  // To create multiple info windows with unique content, used closures for event listeners.
  // https://developers.google.com/maps/documentation/javascript/events#EventClosures
  for (var i = 0; i < locations.length; i++) {
      const marker = new google.maps.Marker({
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
   
  directionsRenderer.setMap(map);
  directionsRenderer.setOptions( { suppressMarkers: true } ); // Gives attention to info windows instead
  // from https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer.setMap
  
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

// Taken and edited from 'Travel Modes in Directions' template to make use of the direction services
// with multiple modes of transportation
// https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes#maps_directions_travel_modes-javascript
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;
  const first = new google.maps.LatLng(43.476090, -80.525549); // restaurant 2
  const second = new google.maps.LatLng(43.469166, -80.484820); // restaurant 3
  
  directionsService
    .route({
      origin: { lat: 43.472095, lng: -80.537387}, // restaurant 1
      destination: {lat: 43.463116, lng: -80.466321}, // // restaurant 4
      waypoints: [{location: first},
        {location: second}],
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

