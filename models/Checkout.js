const mongoose = require('mongoose');
const checkoutSchema = new mongoose.Schema({
    totalBill: Number,
},{timestamps: true}); 

module.exports = mongoose.model('Checkout', checkoutSchema);