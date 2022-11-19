var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AlumnoSchema = new Schema({
    codigo: {type: varchar, required: true, max: 20},
    nombre: {type: String, required: true, max: 20},
    email: {type: String, required: true},
    facultad: {type: String, required: true, max:20},
    created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Alumno', AlumnoSchema);

