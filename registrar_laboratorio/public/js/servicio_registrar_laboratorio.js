'use strict';

function registrarLab(paInfoLab){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_laboratorio',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre : paInfoLab[0],
            codigo : paInfoLab[1],
            cupo : paInfoLab[2],
            sede : paInfoLab[3]
        }
    });
    
    peticion.done(function(response){
        respuesta = response;
       });
     
       peticion.fail(function(response){
        
       });
 
       return respuesta;
 }