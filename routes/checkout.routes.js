const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout.controller');

router.post('/create', checkoutController.create);
router.get('/all', checkoutController.getAll);
router.get('/:id', checkoutController.getById);
router.patch('/update/:id', checkoutController.updateById);
router.delete('/delete/:id', checkoutController.deleteByID);

module.exports = router;