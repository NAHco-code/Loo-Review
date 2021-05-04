
/* Concept:
        Login + Create Account is taken care of in backend and css
        search bar
        main menu
        rating - figure out how to gain rating functionality // pick up issue: {  } //
        trip boards // save for last
        event listeners for each button // pick up issue: {  } //
        probably more stuff

        ** can or should we break this up into seperate script files? */

// TODO: Declare golbal variables
// haversine calculation - if you have coordinates it filters the locations
const locations = [
        {lat: 39.9902047, lng: -83.0061},
        {lat: 39.9892452, lng: -83.0054187},
        {lat: 39.9939083, lng: -83.0062601},
        {lat: 39.994207, lng: -83.0059488}
    ]

    function initMap() {
        const myLatLng = locations[0];
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: myLatLng,
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
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
