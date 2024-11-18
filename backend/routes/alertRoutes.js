const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

router.post('/', alertController.createAlert);

router.get('/', alertController.getAllAlerts);

router.get('/:id', alertController.getAlertById);

router.delete('/:id', alertController.deleteAlert);

module.exports = router;