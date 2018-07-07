'use strict';
const express = require('express');
const router = express.Router();
const LaboratoriosApi =  require('./registrar_laboratorio.api');

router.route('/registrar_laboratorio')
    .post(function(req, res){
        LaboratoriosApi.registrar(req, res);
    });

    module.exports = router;