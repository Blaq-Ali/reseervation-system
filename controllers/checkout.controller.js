const Checkout = require('../models/Checkout');

const create = async (req, res) => {
    console.log('req.body = ', req.body);
    const checkout = await Checkout.create(req.body);
    res.send(checkout);
};

const getAll = async (req, res) => {
    const checkouts = await Checkout.find();
    console.log('Checkouts = ', checkouts);
    res.send(checkouts);
};

const getById = async (req, res) => {
    console.log('req.params = ', req.params);
    const checkout = await Checkout.findById(req.params.id);
    if(checkout){
        res.send(checkout);
    }else{
        res.status(404).send('Checkout not found');
    }
    
};

const updateById = async (req, res) => {
    console.log('req.params = ', req.params);
    const checkout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(checkout);
    console.log('Updated checkout = ', checkout);
};

const deleteByID = async (req, res) => {
    console.log('req.params = ', req.params);
    const checkout = await Checkout.findByIdAndDelete(req.params.id);
    console.log('(after) Deleted checkout = ', checkout);
    res.send(checkout);
};

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteByID,
};