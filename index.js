function initMap() {
    var options = {
        zoom:2,
        center:{lat:51.476852, lng:-0.000500}
    }
    //New map
    var map = new google.maps.Map(document.getElementById('map'),  options);


function initMap() {
    var input = document.getElementById('searchMapInput');
    
    var autocomplete = new google.maps.places.Autocomplete(input);
   
    autocomplete.setComponentRestrictions({'country': ['in']});
      
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        document.getElementById('location-snap').innerHTML = place.formatted_address;
        document.getElementById('lat-span').innerHTML = place.geometry.location.lat();
        document.getElementById('lon-span').innerHTML = place.geometry.location.lng();
    });
}
    //Listen for click on map
    // google.maps.event.addListener(map, 'click',
    // function(event){
    //     //Add marker
    //     addMarker({coords:event.latLng});
    // });
// var data = {
//                 "Afghanistan" : { 
//                                   "coord" : [1234,4567],33.9391° N, 67.7100° E
//                                   "vacc" : ["vacc_a", "vacc_b", ...],
//                                 }
//             }


// data["Afghanistan"] // [1234, 4567]

    // Array of markers
    // var markers = [
    //     {
    //     coords:{lat:33.9391,lng:67.7100},
    //     iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
    //     content:'<h1>Afghanistan</h1>'
    //     },
    //     {
    //     coords:{lat:41.1533,lng:20.1683},
    //     iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
    //     content:'<h1>Albania</h1>'
    //     },
    //     {
    //     coords:{lat:28.0339,lng:-1.6596},
    //     iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
    //     content:'<h1>Algeria</h1>'
    //     }

    // ];
    // //Loop through markers
    // for(var i = 0; i < markers.length; i++){
    //     //Add marker
    //     addMarker(markers[i]);
    // }

   // Add marker function
    // function addMarker(props){
    //     var marker = new google.maps.Marker({
    //     position:props.coords,
    //     map:map
    // });
    
//     // Check for customicon
//     if(props.iconImage){
//         // Set icon image
//         marker.setIcon(props.iconImage);
//     }

//     //Check content
//     if(props.content){
//         var infoWindow = new google.maps.InfoWindow({
//          content:props.content
//      });

//      marker.addListener('click', function(){
//         infoWindow.open(map, marker);
//     });
// }
// }
}

		
	
    //   function initAutocomplete() {
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -33.8688, lng: 151.2195},
    //       zoom: 13,
    //       mapTypeId: 'roadmap'
    //     });

    //     // Create the search box and link it to the UI element.
    //     var input = document.getElementById('pac-input');
    //     var searchBox = new google.maps.places.SearchBox(input);
    //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    //     // Bias the SearchBox results towards current map's viewport.
    //     map.addListener('bounds_changed', function() {
    //       searchBox.setBounds(map.getBounds());
    //     });

    //     var markers = [];
    //     // Listen for the event fired when the user selects a prediction and retrieve
    //     // more details for that place.
    //     searchBox.addListener('places_changed', function() {
    //       var places = searchBox.getPlaces();

    //       if (places.length == 0) {
    //         return;
    //       }

    //       // Clear out the old markers.
    //       markers.forEach(function(marker) {
    //         marker.setMap(null);
    //       });
    //       markers = [];

    //       // For each place, get the icon, name and location.
    //       var bounds = new google.maps.LatLngBounds();
    //       places.forEach(function(place) {
    //         if (!place.geometry) {
    //           console.log("Returned place contains no geometry");
    //           return;
    //         }
    //         var icon = {
    //           url: place.icon,
    //           size: new google.maps.Size(71, 71),
    //           origin: new google.maps.Point(0, 0),
    //           anchor: new google.maps.Point(17, 34),
    //           scaledSize: new google.maps.Size(25, 25)
    //         };

    //         // Create a marker for each place.
    //         markers.push(new google.maps.Marker({
    //           map: map,
    //           icon: icon,
    //           title: place.name,
    //           position: place.geometry.location
    //         }));

    //         if (place.geometry.viewport) {
    //           // Only geocodes have viewport.
    //           bounds.union(place.geometry.viewport);
    //         } else {
    //           bounds.extend(place.geometry.location);
    //         }
    //       });
    //       map.fitBounds(bounds);
    //     });
    //   }
