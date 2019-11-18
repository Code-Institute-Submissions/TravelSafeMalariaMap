// $(document).ready(function(){
  // Write your Code Here 
var countries = [ "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
// var data = {
//     "Afghanistan" : {
//         "coord" : { "lat" : 33.9391, "lng" : 67.7100 }
//         "vacc" : { "vacc_a" ,  "vacc_b" }
//     },
//     "Albania" : {
//         "coord" : { "lat" :41.1533, "lng" :20.1683 }
//         "vacc" : { "vacc_a", "vacc_b" }
//     },
//     "Algeria" : {
//         "coord" : { "lat" :28.0339, "lng" :1.6596 }
//         "vacc" : { "vacc_a", "vacc_b" }
//     },
//     "Andorra" : {
//         "coord" : { "lat" :42.5063, "lng" :1.5218 }
//         "vacc" : { "vacc_a", "vacc_b" }
//     },
//     "Angola" : {
//         "coord" : { "lat" :11.2027, "lng" :17.8739}
//         "vacc" : { "vacc_a", "vacc_b" }
// }
// }

autocomplete(document.getElementById("myInput"), countries);

function initMap() {
    var options = {
         zoom:2,
         center:{lat:51.476852, lng:-0.000500}
     }
     //New map
    var map = new google.maps.Map(document.getElementById('map'),  options);
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

$( "#myInput" ).change(function() {
    alert( "A text to be seen." );
});


// $("#yourdropdownid").change(function() {
//     console.log($("option:selected", this).text()); //text
//     console.log($(this).val()); //value
// }); 

// $("#dropdownID").change(function(){
//   alert($('option:selected', $(this)).text());
// });

// function initMap() {
//     var options = {
//         zoom:2,
//         center:{lat:51.476852, lng:-0.000500}
//     }
//     //New map
//     var map = new google.maps.Map(document.getElementById('map'),  options);


// function initMap() {
//     var input = document.getElementById('searchMapInput');
    
//     var autocomplete = new google.maps.places.Autocomplete(input);
   
//     autocomplete.setComponentRestrictions({'country': ['in']});
      
//     autocomplete.addListener('place_changed', function() {
//         var place = autocomplete.getPlace();
//         document.getElementById('location-snap').innerHTML = place.formatted_address;
//         document.getElementById('lat-span').innerHTML = place.geometry.location.lat();
//         document.getElementById('lon-span').innerHTML = place.geometry.location.lng();
//     });
// }
//     Listen for click on map
//     google.maps.event.addListener(map, 'click',
//     function(event){
//         //Add marker
//         addMarker({coords:event.latLng});
//     });
// var data = {
//                 "Afghanistan" : { 
//                                   "coord" : [1234,4567],33.9391° N, 67.7100° E
//                                   "vacc" : ["vacc_a", "vacc_b", ...],
//                                 }
//             }


// data["Afghanistan"] // [1234, 4567]

//     Array of markers
//     var markers = [
//         {
//         coords:{lat:33.9391,lng:67.7100},
//         iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
//         content:'<h1>Afghanistan</h1>'
//         },
//         {
//         coords:{lat:41.1533,lng:20.1683},
//         iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
//         content:'<h1>Albania</h1>'
//         },
//         {
//         coords:{lat:28.0339,lng:-1.6596},
//         iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
//         content:'<h1>Algeria</h1>'
//         }

//     ];
//     //Loop through markers
//     for(var i = 0; i < markers.length; i++){
//         //Add marker
//         addMarker(markers[i]);
//     }

//    Add marker function
//     function addMarker(props){
//         var marker = new google.maps.Marker({
//         position:props.coords,
//         map:map
//     });
    
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
// }

		
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
