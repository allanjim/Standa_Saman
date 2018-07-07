'use strict';

let mongoose = require('mongoose');

let grupoSchema = new mongoose.Schema({
    curso : {type: String, required: true},
    laboratorio : {type: String, required: true},
    profesor : {type: String, required: true},
    cupo : {type: Number, required: true},
    horario : {type: String, required: true}

});

module.exports = mongoose.model('Grupo', grupoSchema);