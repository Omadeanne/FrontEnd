//  initialize and add the map
function initMap(){

    // your location
    const loc = { lat: 9.068530, lng: 7.483750};
    // centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    // the marker, positioned at the location
    const marker = new google.maps.Marker({position: loc, map:
    map });
    
}

// function API_KEY(){

//     // your location
//     const loc = { lat: 9.068530, lng: 7.483750};
//     // centered map on location
//     const map = new google.maps.Map(document.querySelector('.map')
//     , {
//         zoom: 14,
//         center: loc
//     });
//     // the marker, positioned at the location
//     const marker = new google.maps.Marker({position: loc, map:
//     map });
    
// }

// sticky menu background
window.addEventListener('scroll', function() {
   if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
   } else {
    document.querySelector('#navbar').style.opacity = 1;
   } 

});

// smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
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


