'use strict';

const grupoModel = require ('./registrar_grupos.model');

module.exports.registrar = function(req, res){
    console.log(req.body);
    let nuevoGrupo = new grupoModel({
        curso : req.body.curso,
        laboratorio : req.body.laboratorio,
        profesor : req.body.profesor,
        cupo : req.body.cupo,
        horario : req.body.horario
    })

    nuevoGrupo.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el grupo, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El grupo se registró con éxito'});
        }

    });

};
