'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);


let inputNombreuser = document.querySelector('#txtNombreuser');
let inputPrimerapellidouser = document.querySelector('#txtPrimerapellidouser');
let inputSegundoapellidouser = document.querySelector('#txtSegundoapellidouser');
let inputCedulauser = document.querySelector('#txtCedulauser');
let inputFechauser = document.querySelector('#dateFechauser');
let inputCorreouser = document.querySelector('#txtCorreouser');
let inputTelefonouser = document.querySelector('#txtTelefonouser');

let sNombreuser = '';
let sPrimerapellidouser = '';
let sSegundoapellidouser = '';
let nCedulauser = 0;
let dFechauser = '';
let sCorreouser = '';
let nTelefonouser = 0;

let regexSoloLetras = /^[a-zA-Z]+$/;
let regexSoloNumeros = /^[0-9]+$/;
let regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;


function obtenerDatos()
{
    let infoUsuarios = []
    sNombreuser =  inputNombreuser.value;
    sPrimerapellidouser =  inputPrimerapellidouser.value;
    sSegundoapellidouser = inputSegundoapellidouser.value;
    nCedulauser = inputCedulauser.value ;
    dFechauser = inputFechauser.value ;
    sCorreouser = inputCorreouser.value ;
    nTelefonouser= inputTelefonouser.value;

    let bError = false;
    bError = validar();

    if (bError) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar su usuario, verifique que completó con la informacion que se le solicita',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        swal({
            title: 'Registro correcto',
            text: 'Su usuario se ha registrado correctamente ',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        infoUsuarios.push(sNombreuser,sPrimerapellidouser ,sSegundoapellidouser ,nCedulauser ,dFechauser ,sCorreouser ,nTelefonouser);
        registrarCarrera(infoUsuarios);
        limpiarFormulario();
    }
};

function validar ()
{
    let bError = false;
    sNombreuser = inputNombreuser.value;
    sPrimerapellidouser = inputPrimerapellidouser.value;
    sSegundoapellidouse = inputSegundoapellidouser.value;
    nCedulauser = Number(inputCedulauser.value);
    dFechauser = new Date( inputFechauser.value);
    let dHoy = new Date();
    sCorreouser  = inputCorreouser.value ;
    nTelefonouser = Number(inputTelefonouser.value);


    // Validacion contra blancos
    let arregloInputs = document.querySelectorAll('input:required');
    for (let i = 0; i < arregloInputs.length; i++) {
        if (arregloInputs[i].value == '') {
            bError = true;
            arregloInputs[i].classList.add('errorInputs');
        } else {
            arregloInputs[i].classList.remove('errorInputs');
        }
    };
    // Validacion para el nombre
    if (regexSoloLetras.test( sNombreuser) == false) {
        bError = true;
        inputNombreuser.classList.add('errorInputs');
    } else {
        inputNombreuser.classList.remove('errorInputs');
    };

    // Validacion para el primer apellido
    if (regexSoloLetras.test(sPrimerapellidouser) == false) {
        bError = true;
        inputPrimerapellidouser.classList.add('errorInputs');
    } else {
        inputPrimerapellidouser.classList.remove('errorInputs');
    };

 // Validacion para el segundo apellido
    if (regexSoloLetras.test(sSegundoallidouser) == false) {
        bError = true;
        inputSegundoapellidouser.classList.add('errorInputs');
    } else {
        inputSegundoapellidouser.classList.remove('errorInputs');
    };

    // Validacion para la cedula
    if (regexSoloNumeros.test(nCedulauser) == false) {
        bError = true;
        inputCedulauser.classList.add('errorInputs');
    } else {
        inputCedulauser.classList.remove('errorInputs');
    };

    // Validacion de la fecha
    if(dFechauser > dHoy){
        bError = true;
        inputFechauser.classList.add('errorInputs');
    } else {
        inputFechauser.classList.remove('errorInputs');
    };

    // Validacion para el correo
    if (regexCorreos.test(sCorreouser) == false) {
        bError = true;
        inputCedulauser.classList.add('errorInputs');
    } else {
        inputCedulauser.classList.remove('errorInputs');
    };

    // Validacion para el telefono
    if (regexSoloNumeros.test(nTelefonouser) == false) {
        bError = true;
        inputTelefonouser.classList.add('errorInputs');
    } else {
        inputTelefonouser.classList.remove('errorInputs');
    };

    return bError;
};

function limpiarFormulario(){
    inputNombreuser.value = "";
    inputPrimerapellidouser.value = "";
    inputSegundoapellidouser.value = "";
    inputCedulauser.value = 0;
    inputFechauser.value = "";
    inputCorreouser.value = "";
    inputTelefonouser.value = 0;
};
// Utilizando jquery, hago que el menu cambie si display al presionar el boton
$("#btnMenu").click(function(){
    showMenu();
});
$("#menu").mouseleave(function(){
    hideMenu();
});

function showMenu(){
    if ($("#menu").css("display") === 'none') {
        $("#menu").fadeIn("slow");
    }
};
function hideMenu(){
    $("#menu").fadeOut("slow");
};

