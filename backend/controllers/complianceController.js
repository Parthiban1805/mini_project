const Compliance = require('../models/Compliance');

exports.createCompliance = async (req, res) => {
    try {
        const compliance = await Compliance.create(req.body);
        res.status(201).json(compliance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCompliance = async (req, res) => {
    try {
        const complianceRecords = await Compliance.find();
        res.status(200).json(complianceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getComplianceById = async (req, res) => {
    try {
        const compliance = await Compliance.findById(req.params.id);
        if (!compliance) return res.status(404).json({ message: "Compliance record not found" });
        res.status(200).json(compliance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCompliance = async (req, res) => {
    try {
        const compliance = await Compliance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!compliance) return res.status(404).json({ message: "Compliance record not found" });
        res.status(200).json(compliance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCompliance = async (req, res) => {
    try {
        const compliance = await Compliance.findByIdAndDelete(req.params.id);
        if (!compliance) return res.status(404).json({ message: "Compliance record not found" });
        res.status(200).json({ message: "Compliance record deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
