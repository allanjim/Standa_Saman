'use strict';

function registrar_Usuarios (paInfoCarrera)
{
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_Usuarios',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombre_usuario: paInfoUsuario[0],
            primerapellido_usuario: paInfoUsuario[1],
            segundoapellido_usuario: paInfoUsuario[2],
            cedula_usuario:paInfoUsuario[3],
            fecha_usuario: paInfoUsuario[4],
            correo_usuario:paInfoUsuario[5],
            telefono_usuario:paInfoUsuario[6],
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

function obtenerLista_Usuarios(){
    let listaCarreras = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_Usuarios',
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