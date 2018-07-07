'use strict';

function registrarCarrera (paInfoCarrera)
{
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_carrera',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombre_carrera: paInfoCarrera[0],
            codigo_carrera: paInfoCarrera[1],
            creditos_carrera: paInfoCarrera[2],
            fecha_carrera: paInfoCarrera[3]
        }
    });

    peticion.done(function (response)
    {
        respuesta = response;
    });

    peticion.fail(function (response)
    {

    });

    return respuesta;
}

function obtenerListaCarreras(){
    let listaCarreras = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_carrera',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaCarreras;
}
