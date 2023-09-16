const express = require('express');
const router = express.Router();
const checkinController = require('../controllers/checkin.controller');

router.post('/create', checkinController.create);
router.get('/all', checkinController.getAll);
router.get('/:id', checkinController.getById);
router.patch('/update/:id', checkinController.updateById);
router.delete('/delete/:id', checkinController.deleteByID);

module.exports = router;