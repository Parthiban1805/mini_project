// routes/climateRiskRoutes.js
const express = require('express');
const { addClimateRisk } = require('../controllers/climateRiskController');
const router = express.Router();

router.post('/', addClimateRisk);

module.exports = router;
