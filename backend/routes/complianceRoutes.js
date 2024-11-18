const express = require('express');
const router = express.Router();
const complianceController = require('../controllers/complianceController');

router.post('/', complianceController.createCompliance);

router.get('/', complianceController.getAllCompliance);

router.get('/:id', complianceController.getComplianceById);

router.put('/:id', complianceController.updateCompliance);

router.delete('/:id', complianceController.deleteCompliance);

module.exports = router;
