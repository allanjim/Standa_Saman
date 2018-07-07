'use strict'

 let botonRegistrar = document.querySelector("#btnRegistrar");
 let inputNombre = document.querySelector("#txtNombre");
 let selectEstado = document.querySelector("#sltEstado");


 botonRegistrar = addEventListener('click', obtenerDatos)
 function obtenerDatos(){
    let infoPeriodo = [];
    let sNombre = inputNombre.value;
    let sEstado = selectEstado.value;

    infoPeriodo.push(sNombre, sEstado);
    registrarPeriodo(infoPeriodo);

}
