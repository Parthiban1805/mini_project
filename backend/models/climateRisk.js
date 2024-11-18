const mongoose = require('mongoose');

const ClimateRiskSchema = new mongoose.Schema({
    location: { type: String, required: true },
    vulnerabilities: [String],
    riskLevel: { type: String, required: true, enum: ['low', 'medium', 'high'] },
    resilienceMeasures: [String]
});

module.exports = mongoose.model('ClimateRisk', ClimateRiskSchema);
