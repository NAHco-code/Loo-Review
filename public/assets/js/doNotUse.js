//api keys
require('dotenv').config();
const mapKey = process.env.MAP_KEY;
const geoKey = process.env.GEO_KEY;
window.navigator.geolocation.getCurrentPosition(console.log, console.log)
//confirm permission
const permission = confirm('Loo Review would like to access your location');
if (!permission) {
  alert('application cannot work without location data')
};

let map, infoWindow;

function initMap() {

  // const initMap = async () => {
  //   const myLatLon = await window.navigator.geolocation.getCurrentPosition(((locale) => {
  //     return { lat: locale.coords.latitude, lon: locale.coords.longitude };
  //   }, () => { alert('This application will not function properly without your location') }));
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 16,
  //     center: myLatLon,
  //   });

    // make get request // /api/loos?lat=lat&lon=lon *URL *lat1 lon1
    // set response data to locations

  //   for (place of locations) {
  //     new google.maps.Marker({
  //       position: place,
  //       map,
  //       title: "NAME",
  //     });
  //   }
  // };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lon: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
