const Reservation = require('../models/reservation');

const create = async (req, res) => {
    console.log('req.body = ', req.body);
    const reservation = await Reservation.create(req.body);
    res.send(reservation);
};

const getAll = async (req, res) => {
    const reservations = await Reservation.find();
    console.log('Reservations :', reservations);
    res.send(reservations);
};

const getById = async (req, res) => {
    console.log('req.params = ', req.params);
    const reservation = await Reservation.findById(req.params.id);
    if(reservation){
        res.send(reservation);
    }else{
        res.status(404).send('Reservation not found');
    }
    
};

const updateById = async (req, res) => {
    console.log('req.params = ', req.params);
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(reservation);
    console.log('Updated reservation = ', reservation);
};

const deleteByID = async (req, res) => {
    console.log('req.params = ', req.params);
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    console.log('(after) Deleted reservation = ', reservation);
    res.send(reservation);
};

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteByID,
};