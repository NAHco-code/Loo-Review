
// user location and map

// function fetchUserLocation() {
//   //alert = allow app to access your current location
// };
let locations;
const userLocation = window.navigator.geolocation.getCurrentPosition((data) => {
  console.log(data.coords.latitude, data.coords.longitude);

  fetch(`/main?lat=${data.coords.latitude}&lng=${data.coords.longitude}`)
    .then(response => response.json())
    .catch((error) => {
      console.log(error);
    })
});

locations =
[
  { lat: 39.9902047, lng: -83.0061 },
  { lat: 39.9892452, lng: -83.0054187 },
  { lat: 39.9939083, lng: -83.0062601 },
  { lat: 39.994207, lng: -83.0059488 },
];

function initMap() {}

(() => {
  initMap = function () {


    const myLatLng = locations[0];
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
    });
    for (place of locations) {
      new google.maps.Marker({
        position: place,
        map,
        title: "NAME",
      });
    }
  }
})();

// Function populating locations, ...etc.

//Event Listeners
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

// document.addEventListener('DOMContentLoaded', fetchUserLocation() {
//   //return filteredLoos variable *defined in homeRoutes
//   //const userLoc = fetch geolocation
// });

// document.addEventListener('click', fetchUserLocation() {
//   //return filteredLoos variable *defined in homeRoutes
//   //const userLoc = fetch geolocation
// });

initMap();
