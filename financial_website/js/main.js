// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 19.075983, lng: 72.877655 };

  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
    , {
      zoom: 14,
      center: loc

    });

  // The Marker
  const marker = new google.maps.Marker({
    position: loc, map:
      map
  });

}

// Sticky menu background
window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
  document.querySelector('#navbar').style.opacity = 0.9;
}
  else {
  document.querySelector('#navbar').style.opacity = 1;

}
})


// smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash != '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );

  }
});