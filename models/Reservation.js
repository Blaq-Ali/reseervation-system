const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    email: String,
    phone: String,
    eta:   Date,
    etd:   Date,
    client:{type: mongoose.Schema.Types.ObjectId, ref: 'Client'}
},{timestamps: true}); 

module.exports = mongoose.model('Reservation', reservationSchema);