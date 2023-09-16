const Client = require('../models/Client');

const create = async (req, res) => {
    console.log('req.body = ', req.body);
    const client = await Client.create(req.body);
    res.send(client);
};

const getAll = async (req, res) => {
    const clients = await Client.find();
    console.log('Clients :', clients);
    res.send(clients);
};

const getById = async (req, res) => {
    console.log('req.params = ', req.params);
    const client = await Client.findById(req.params.id);
    if(client){
        res.send(client);
    }else{
        res.status(404).send('Client not found');
    }
    
};
// test

const updateById = async (req, res) => {
    console.log('req.params = ', req.params);
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(client);
    console.log('Updated client = ', client);
};

const deleteByID = async (req, res) => {
    console.log('req.params = ', req.params);
    const client = await Client.findByIdAndDelete(req.params.id);
    console.log('(after) Deleted client = ', client);
    res.send(client);
};

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteByID,
};