var mongoose = require('mongoose');
var Alumno = require("../models/Alumno");
var alumnoController = {};
alumnoController.list = function(req, res){
    
    Alumno.find({}).exec(function(err, alumnos){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/alumno/index', {alumnos: 
alumnos,titulo:'INDEX'} );
    });
};
alumnoController.show = function(req, res){
    Alumno.findOne({_id: req.params.id}).exec(function(err, alumno){
    if( err ){ console.log('Error: ', err); return; }     
    res.render('../views/alumno/show', {alumno: alumno} );
});

};
alumnoController.create = function(req, res){
res.render('../views/alumno/create');
};
alumnoController.save = function(req, res){
var alumno = new Alumno( req.body );

alumno.save(function(err){
    if( err ){ console.log('Error: ', err); return; }
    
    console.log("Successfully created a alumno. :)");
    res.redirect("/alumnos/show/"+usuario._id);
    //res.redirect("/alumnos");
});
};
alumnoController.edit = function(req, res) {
Alumno.findOne({_id: req.params.id}).exec(function (err, alumno) 
{
if (err) { console.log("Error:", err); return; }

res.render("../views/alumno/edit", {alumno: alumno});

});
};
alumnoController.update = function(req, res){
Alumno.findByIdAndUpdate( req.params.id, {$set: {
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    email: req.body.email,
    facultad: req.body.facultad
}}, { new: true },
function( err, alumno){
    if( err ){ 
        console.log('Error: ', err); 
        res.render('../views/alumno/edit',  {alumno:  req.body} 
);
    }
    
    console.log( alumno );
    
    res.redirect('/alumnos/show/' + alumno._id);
    
});
};
alumnoController.delete = function(req, res){

Alumno.remove({_id: req.params.id}, function(err){
    if( err ){ console.log('Error: ', err); return; }
    
    console.log("Alumno deleted!");
    res.redirect("/alumnos");
});

};
module.exports = alumnoController;