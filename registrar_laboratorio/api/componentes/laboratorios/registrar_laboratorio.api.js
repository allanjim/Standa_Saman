'use strict';

const LabModel = require ('./registrar_laboratorio.model');

module.exports.registrar = function(req, res){
    console.log(req.body);
    let nuevoLaboratorio = new LabModel({
        nombre_laboratorio : req.body.nombre,
        codigo_laboratorio : req.body.codigo,  
        cupo_laboratorio : req.body.cupo,
        sede_laboratorio : req.body.sede
    })

    nuevoLaboratorio.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el laboratorio, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El laboratorio se registró con éxito'});
        }

    });

};
