const EnergyUsage = require('../models/EnergyUsage');
exports.createEnergyUsage = async (req, res) => {
    try {
        const energyUsage = await EnergyUsage.create(req.body);
        res.status(201).json(energyUsage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllEnergyUsage = async (req, res) => {
    try {
        const energyUsageRecords = await EnergyUsage.find();
        res.status(200).json(energyUsageRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEnergyUsageById = async (req, res) => {
    try {
        const energyUsage = await EnergyUsage.findById(req.params.id);
        if (!energyUsage) return res.status(404).json({ message: "Energy usage record not found" });
        res.status(200).json(energyUsage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEnergyUsage = async (req, res) => {
    try {
        const energyUsage = await EnergyUsage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!energyUsage) return res.status(404).json({ message: "Energy usage record not found" });
        res.status(200).json(energyUsage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEnergyUsage = async (req, res) => {
    try {
        const energyUsage = await EnergyUsage.findByIdAndDelete(req.params.id);
        if (!energyUsage) return res.status(404).json({ message: "Energy usage record not found" });
        res.status(200).json({ message: "Energy usage record deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
