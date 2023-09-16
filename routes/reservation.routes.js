const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');

router.post('/create', reservationController.create);
router.get('/all', reservationController.getAll);
router.get('/:id', reservationController.getById);
router.patch('/update/:id', reservationController.updateById);
router.delete('/delete/:id', reservationController.deleteByID);

module.exports = router;