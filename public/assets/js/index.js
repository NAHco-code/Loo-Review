
// MAP + LOCATION

// Initialize map with user location data and filtered loo location data
function initMap() { }

const userLocation = window.navigator.geolocation.getCurrentPosition((data) => {
  console.log(data.coords.latitude, data.coords.longitude);

  fetch(`/main?lat=${data.coords.latitude}&lng=${data.coords.longitude}`)
    .then(response => response.json())
    .then(looData => {
      console.log(looData);

      
        initMap = function () {
          console.log(initMap);

          const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
            center: { lat: data.coords.latitude, lng: data.coords.longitude },
          });
          for (place of looData) {
            new google.maps.Marker({
              position: { lat: parseFloat(place.lat), lng: parseFloat(place.lon) },
              map,
              title: place.facility_name,
            });
          }
        }
      
      initMap();

      looData.forEach(loo => {
        document.getElementById('filteredLoos').innerHTML += `
        <div class="col s12 m6" id="image">
        <h2 class="header">${ loo.facility_name }</h2>
        <p class="address">${ loo.address }</p>
        <div class="card">
          <div class="card-content">
            <p>Average Rating: <i class="fas fa-poo-storm fa-lg"></i> <i class="fas fa-poo-storm fa-lg"></i> <i class="fas fa-poo-storm fa-lg"></i> <i
            class="fas fa-poo-storm fa-lg"></i></p>
          </div>
          <div class="card-action">
            <a class="button see-reviews" href="/loo/${loo.id}">See Reviews &#8674;</a>
          </div>
        </div>
      </div>`
      })
    })
    .catch((error) => {
      console.log(error);


    })
  


});



//Event Listeners
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});

