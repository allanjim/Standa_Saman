"use strict";
let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    nombre_usuario: {type : String, required:true},
    primerapellido_usuario: {type : String,required:true},
    segundoapellido_usuario: {type : String,required:true},
    cedula_usuario :{type : Number, required:true},
    fecha_usuario: {type : Date,required:true},
    correo_usuario:{type : String,required:true},
    telefono_usuario:{type : Number, required:true},
});
/*instruccoon para exportar datos a la base de daros en forma de esquema moongoose*/
module.exports = mongoose.model(`Users`, UserSchema)