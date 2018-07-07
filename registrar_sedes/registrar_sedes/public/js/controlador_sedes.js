'use strict'

 let botonRegistrar = document.querySelector("#btnRegistrar");
 let inputNombre = document.querySelector("#txtNombre");
 let inputDirExacta = document.querySelector("#txtDirExacta");
 let inputLatitud = document.querySelector("#txtLatitud");
 let inputLongitud = document.querySelector("#txtLongitud")


botonRegistrar = addEventListener('click', obtenerDatos)
function obtenerDatos(){
    let infoSede =[];
    let sNombre = inputNombre.value;
    let sDirExacta = inputDirExacta.value;
    let sLatitud = inputLatitud.value;
    let sLongitud = inputLongitud.value;

    

    infoSede.push(sNombre, sDirExacta, sLatitud, sLongitud);
    registrarSede(infoSede);

};
 
function initMap() {
    var myLatlng = new google.maps.LatLng(9.934739,-84.087502);
    var options = {
        zoom: 8,
        center: myLatlng, 
    };
    // The location of San Jose

    // The map, centered at San Jose
    let map = new google.maps.Map(document.getElementById('map'),options); 
    var marker = new google.maps.Marker({
        position: myLatlng,
         map: map,
         title: "Nueva Sede",
         draggable:true,
        });

    marker.setMap(map);    
}; 