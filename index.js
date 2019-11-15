function initMap() {
    var options = {
        zoom:1,
        center:{lat:51.476852, lng:-0.000500}
    }
    //New map
    var map = new google.maps.Map(document.getElementById('map'),  options);

    //Listen for click on map
    google.maps.event.addListener(map, 'click',
    function(event){
        //Add marker
        addMarker({coords:event.latLng});
    });

    // Array of markers
    var markers = [
        {
        coords:{lat:51.476852,lng:-0.000500},
        iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        content:'<h1>Greenwich</h1>'
        },
        {
        coords:{lat:40.7128,lng:-74.0060},
        iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        content:'<h1>New York</h1>'
        },
        {
        coords:{lat:35.6804,lng:139.7690},
        iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        content:'<h1>Tokyo</h1>'
        }

    ];
    //Loop through markers
    for(var i = 0; i < markers.length; i++){
        //Add marker
        addMarker(markers[i]);
    }

   // Add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map
    });
    
    // Check for customicon
    if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
    }

    //Check content
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
         content:props.content
     });

     marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}
}
}
