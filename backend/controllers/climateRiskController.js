const ClimateRisk = require('../models/climateRisk');

const addClimateRisk = async (req, res) => {
    try {
        const { location, vulnerabilities, riskLevel, resilienceMeasures } = req.body;

        if (!location || !riskLevel) {
            return res.status(400).json({ error: 'Location and risk level are required.' });
        }

        const newRisk = new ClimateRisk({
            location,
            vulnerabilities,
            riskLevel,
            resilienceMeasures,
        });

        const savedRisk = await newRisk.save();
        res.status(201).json(savedRisk);
    } catch (error) {
        console.error('Error saving Climate Risk:', error);
        res.status(500).json({ error: 'Failed to save Climate Risk data.' });
    }
};

module.exports = { addClimateRisk };
