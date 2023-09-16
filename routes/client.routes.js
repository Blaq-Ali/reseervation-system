const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');

router.post('/create', clientController.create);
router.get('/all', clientController.getAll);
router.get('/:id', clientController.getById);
router.patch('/update/:id', clientController.updateById);
router.delete('/delete/:id', clientController.deleteByID);

module.exports = router;