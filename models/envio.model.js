const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EnvioSchema = new Schema({
    pedidoId: {
        type: String,
        required: true,
        unique: true
    },

    remitente: {
        type: String,
        required: true
    },

    destinatario: {
        type: String,
        required: true
    },

    direccionEntrega: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'en_transito', 'entregado'],
        default: 'pendiente'
    },

    created_at: {
        type: Date,
        default: Date.now
    }

},{
    versionKey: false
});
module.exports = mongoose.model('Envio', EnvioSchema);