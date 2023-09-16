const Checkin = require('../models/Checkin');

const create = async (req, res) => {
    console.log('req.body = ', req.body);
    const checkin = await Checkin.create(req.body);
    res.send(checkin);
};

const getAll = async (req, res) => {
    const checkins = await Checkin.find();
    console.log('Checkins = ', checkins);
    res.send(checkins);
};

const getById = async (req, res) => {
    console.log('req.params = ', req.params);
    const checkin = await Checkin.findById(req.params.id);
    if(checkin){
        res.send(checkin);
    }else{
        res.status(404).send('Checkin not found');
    }
    
};

const updateById = async (req, res) => {
    console.log('req.params = ', req.params);
    const checkin = await Checkin.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(checkin);
    console.log('Updated checkin = ', checkin);
};

const deleteByID = async (req, res) => {
    console.log('req.params = ', req.params);
    const checkin = await Checkin.findByIdAndDelete(req.params.id);
    console.log('(after) Deleted checkin = ', checkin);
    res.send(checkin);
};

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteByID,
};