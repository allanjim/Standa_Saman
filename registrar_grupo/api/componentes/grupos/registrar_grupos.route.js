'use strict';
const express = require('express');
const router = express.Router();
const gruposApi =  require('./registrar_grupos.api');

router.route('/registrar_grupos')
    .post(function(req, res){
        gruposApi.registrar(req, res);
    });

    module.exports = router;