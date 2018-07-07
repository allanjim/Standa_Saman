'use strict';

function registrarGrupo(paInfoGrupo){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_grupo',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            curso : paInfoGrupo[0],
            laboratorio : paInfoGrupo[1],
            profesor : paInfoGrupo[2],
            cupo : paInfoGrupo[3],
            horario : paInfoGrupo[4]         
        }
    });
    
    peticion.done(function(response){
        respuesta = response;
       });
     
       peticion.fail(function(response){
        
       });
 
       return respuesta;
 }