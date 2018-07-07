
 function initMap() {
    var myLatlng = new google.maps.LatLng(9.934739,-84.087502);
    var options = {
        zoom: 8,
        center: myLatlng, 
    }
    // The location of San Jose

    // The map, centered at San Jose
    let map = new google.maps.Map(document.getElementById('map'),options); 
    var marker = new google.maps.Marker({
        position: myLatlng,
         map: map,
         draggable:true
        });

    marker.setMap(map);    
}; 

