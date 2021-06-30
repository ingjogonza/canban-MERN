const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const CanbanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No puede enviar un proyecto sin nombre'],
        minLength: [3, 'Nombre requiere por lo menos 3 caracteres'],
        unique: [true, "Nombre de proyecto ya existe, intente con uno diferente"]
    },
    due_date: {
        type: Date,
        required: [true, 'No se puede crear un proyecto sin fecha de finalización']
    },
    status: {
        type: String
    }  
},
{timestamps: true}
);

const Canban = mongoose.model('Canban', CanbanSchema);
CanbanSchema.plugin(uniqueValidator);

module.exports = Canban;