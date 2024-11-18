const express = require('express');
const { getKPIs, addKPI } = require('../controllers/kipController');
const router = express.Router();

router.get('/', getKPIs);
router.post('/', addKPI);

module.exports = router;
