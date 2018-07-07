'use strict';
const express = require('express');
const router = express.Router();
const periodos = require('./periodos.api');

router.route('/registrar_periodos')
    .post(function(req, res){
    periodos.registrar(req, res);
});

module.exports = router;