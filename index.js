// INCLUDING MODULES
const express = require('express');
const mongoose = require('mongoose');
// const reservation = require('./models/reservation');
const bodyParser = require('body-parser');

// INCLUDING ROUTE FILES
const reservationRoutes = require('./routes/reservation.routes');
const clientRoutes = require('./routes/client.routes');
const checkinRoutes = require('./routes/checkin.routes');
const checkoutRoutes = require('./routes/checkout.routes');

const app = express();
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1/reservate');

// IMPLEMENTING ROUTES
app.get('/', (req,res) => {
    res.send('ok');
});
app.use('/reservations', reservationRoutes);
app.use('/clients', clientRoutes);
app.use('/checkouts', checkoutRoutes);
app.use('/checkins', checkinRoutes);
app.use((req,res) => {
    res.status(404).send('Resource not found')
});
app.listen(3000, ()=> {
    console.log('App on port 3000');
});