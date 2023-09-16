const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    eta:   String,
    etd:   String,
    nationality: String,
    passport: String
}); 

module.exports = mongoose.model('Client', clientSchema);