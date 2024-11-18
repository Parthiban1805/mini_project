const mongoose = require('mongoose');

const kpiSchema = new mongoose.Schema({
    type: { type: String, required: true },
    target: { type: Number, required: true },
    currentValue: { type: Number, required: true },
    units: { type: String, required: true },
});

module.exports = mongoose.model('KPI', kpiSchema);
