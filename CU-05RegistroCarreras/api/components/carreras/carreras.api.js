'use strict';
const carreraModel = require('./carreras.model');

module.exports.registrar_carrera = function (req, res)
{
    let nuevaCarrera = new carreraModel({
        nombre_carrera: req.body.nombre_carrera,
        grado_carrera: req.body.grado_carrera,
        codigo_carrera: req.body.codigo_carrera,
        creditos_carrera: req.body.creditos_carrera,
        fecha_carrera: req.body.fecha_carrera,
        sede_carrera: "Sede Central",
        periodo_carrera: "Primer período",
        estado_carrera: "Activo"
    });
    nuevaCarrera.save(function (error)
    {
        if (error) {
            res.json({
                success: false,
                msg: 'La carrera no pudo ser registrada: ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'La carrera ha sido registrada correctamente ' + error
            });
        }
    });
};

module.exports.listar_carrera = function (req, res)
{
    carreraModel.find().sort({ nombre_carrera: 'asc' }).then(
        function (carreras)
        {
            res.send(carreras);
        }
    );
};