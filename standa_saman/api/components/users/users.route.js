`use strict`;
const express = require(`express`);
const router = express.Router();
const usersApi = require(`./users.api`);

router.route(`/registrar_Usuarios`)
.post(function(req , res){
usersApi.registrar(req, res)
});

router.route(`/listar_Usuarios`)
.get(function(req , res){
usersApi.listar_todos(req, res)
});

module.exports = router;