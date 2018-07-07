'use strict';

let botonRegistrar = document.querySelector('#botonRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombreLab = document.querySelector('#txtNombreLab');
let inputCodigoLab = document.querySelector('#txtCodigoLab');
let inputCupoLab = document.querySelector('#numCupoLab');
let inputSedeLab = document.querySelector('#txtSedeLab');

function obtenerDatos(){
    let infoLab = [];
    let bError = false;

    let sNombreLab = inputNombreLab.value;
    let sCodigoLab = inputCodigoLab.value;
    let sCupoLab = Number(inputCupoLab.value);
    let sSedeLab = inputSedeLab.value;

    infoLab.push(sNombreLab, sCodigoLab, sCupoLab, sSedeLab);

    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el laboratorio',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el laboratorio');
    }else{
        registrarLab(infoLab);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El laboratorio se registró correctamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }

};

function validar(){
    let bError = false;

    let regexSoloNumeros = /^[0-9]+$/;

    //validación Nombre

    if(inputNombreLab.value == ''){
        inputNombreLab.classList.add('error_input');
        bError = true;
    }else{
        inputNombreLab.classList.remove('error_input');
    }

    // validación código

    if(inputCodigoLab.value = ''){
        inputCodigoLab.classList.add('error_input');
        bError = true;
    }else{
        inputCodigoLab.classList.remove('error_input');
    }

    // validación cupo

    if(inputCupoLab.value == '' || (regexSoloNumeros.test(inputCupoLab.value)==false) || Number(inputCupoLab) < Number(inputCupoLab.min)){
        inputCupoLab.classList.add('error_input');
        let bError = true;
    }else{
        inputCupoLab.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario(){
    inputNombreLab.value = '';
    inputCodigoLab.value = '';
    inputCupoLab.value = '';
    inputSedeLab.value = '';
}