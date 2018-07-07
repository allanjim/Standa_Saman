'use strict';
const express = require('express');
const router = express.Router();
const sedesAPI = require('./sedes.api');

router.route('/registrar_sedes')
    .post(function(req, res) {
        sedesAPI.registrar(req, res);
});

module.exports = router;