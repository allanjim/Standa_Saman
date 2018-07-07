`use strict`;
const usersModel = require(`./users.model`);

module.exports.registrar = function(req, res){

  let nuevousuario = new usersModel({
      nombre_usuario: req.body.nombre,
      primerapellido_usuario: req.body.primerapellido,
      segundoapellido_usuario: req.body.segundoapellido,
      cedula_usuario:req.body.cedula,
      fecha_usuario: req.body.fecha,
      correo_usuario:req.body.correo,
      telefono_usuario:req.body.telefono,
  });

  nuevousuario.save(function(error){
      if(error){
         res,json({success : false, msg: 'No se pudo registrar su usuario, ocurrio el siguiente error '+ error});
      }else{
          res.json({success : true, msg: 'usted se ha registro con exito'})
      }

  });
};
module.exports.listar_todos = function(req , res){
    usersModel.find().then(
        function(usuarios){
            res.send(usuarios);
        }
    );

};
