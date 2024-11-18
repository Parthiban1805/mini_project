const express = require('express');
const router = express.Router();
const energyUsageController = require('../controllers/energyUsageController');

router.post('/', energyUsageController.createEnergyUsage);

router.get('/', energyUsageController.getAllEnergyUsage);

router.get('/:id', energyUsageController.getEnergyUsageById);

router.put('/:id', energyUsageController.updateEnergyUsage);

router.delete('/:id', energyUsageController.deleteEnergyUsage);

module.exports = router;
