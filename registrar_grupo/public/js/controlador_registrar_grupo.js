'use strict';

let botonRegistrar = document.querySelector('#botonRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);

let inputCurso = document.querySelector('#txtCurso');
let inputLab = document.querySelector('#txtLab');
let inputProfesor = document.querySelector('#txtProfesor');
let inputCupo = document.querySelector('#numCupo');
let inputHorario = document.querySelector('#txtHorario');

function obtenerDatos(){
    let infoGrupo =[];
    let bError = false;

    let sCurso = inputCurso.value;
    let sLab = inputLab.value;
    let sProfesor = inputProfesor.value;
    let sCupo = Number(inputCupo.value);
    let sHorario = inputHorario.value;

    infoGrupo.push(sCurso, sLab, sProfesor, sCupo, sHorario);

    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el grupo',
            text: 'Favor revisar los campos resaltados',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el grupo');
    }else{
        registrarGrupo(infoGrupo);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El grupo se registró correctamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }

};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-Z áéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //validación de curso
    if(inputCurso.value == ''){
        inputCurso.classList.add('error_input');
        bError = true;
    }else{
        inputCurso.classList.remove('error_input');
    }
    //validación laboratorio
    if(inputLab.value == ''){
        inputLab.classList.add('error_input');
        bError = true;
    }else{
        inputLab.classList.remove('error_input');
    }
    //validación profesor
    if(inputProfesor.value == '' || (regexSoloLetras.test(inputProfesor.value)== false) ){
        inputProfesor.classList.add('error_input');
        bError =  true;
    }else{
        inputProfesor.classList.remove('error_input');
    }
    //validación cupo
    if(inputCupo.value == '' || (regexSoloNumeros.test(inputCupo.value)==false) || Number(inputCupo) < Number(inputCupo.min)){
        inputCupo.classList.add('error_input');
        let bError = true;
    }else{
        inputCupo.classList.remove('error_input');
    }
    //validación horario
    if(inputHorario.value == ''){
        inputHorario.classList.add('error_input');
        bError = true;
    }else{
        inputHorario.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario(){
    inputCurso.value = '';
    inputProfesor.value = '';
    inputLab.value = '';
    inputCupo.value = '';
    inputHorario.value = '';
}
