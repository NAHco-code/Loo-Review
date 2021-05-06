
// user location and map

// function fetchUserLocation() {
//   //alert = allow app to access your current location
// };

const locations = [
    {lat: 39.9902047, lon: -83.0061},
    {lat: 39.9892452, lon: -83.0054187},
    {lat: 39.9939083, lon: -83.0062601},
    {lat: 39.994207, lon: -83.0059488}
  ]

function initMap() {
    const myLatLon = locations[0];
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLon,
    });
    for (place of locations){
        new google.maps.Marker({
        position: place,
        map,
        title: "NAME",
        });
    }
  };

// Function populating locations, ...etc.

//Event Listeners
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// document.addEventListener('DOMContentLoaded', fetchUserLocation() {
//   //return filteredLoos variable *defined in homeRoutes
//   //const userLoc = fetch geolocation
// });

// document.addEventListener('click', fetchUserLocation() {
//   //return filteredLoos variable *defined in homeRoutes
//   //const userLoc = fetch geolocation
// });
