const mongoose = require('mongoose');
const checkinSchema = new mongoose.Schema({
    date: Date,
    paymentStatus : Boolean,
    rooms: Array,
    people: Number,
    client:{type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
},{timestamps: true}); 

module.exports = mongoose.model('Checkin', checkinSchema);