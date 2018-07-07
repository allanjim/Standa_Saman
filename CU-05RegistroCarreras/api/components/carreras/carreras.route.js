'use strict';
const express = require('express');
const router = express.Router();
const carrerasApi = require('./carreras.api');

router.route('/registrar_carrera')
    .post(function (req, res)
    {
        carrerasApi.registrar_carrera(req, res);
    });

router.route('/listar_carrera')
    .get(function (req, res)
    {
        carrerasApi.listar_carrera(req, res);
    });

module.exports = router;