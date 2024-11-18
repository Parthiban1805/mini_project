const Alert = require('../models/Alert');
const { sendNotification } = require('../utils/notificationService');

exports.createAlert = async (req, res) => {
    try {
        const newAlert = new Alert(req.body);
        await newAlert.save();
        res.status(201).json(newAlert);
        sendNotification(`Alert triggered: ${alert.message}`, req.body.user);
        
        res.status(201).json(alert);
    } catch (error) {
        console.error('Error creating alert:', error);
        res.status(500).json({ message: 'Error creating alert', error });

        res.status(400).json({ message: error.message });
    }
};

exports.getAllAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAlertById = async (req, res) => {
    try {
        const alert = await Alert.findById(req.params.id);
        if (!alert) return res.status(404).json({ message: "Alert not found" });
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAlert = async (req, res) => {
    try {
        const alert = await Alert.findByIdAndDelete(req.params.id);
        if (!alert) return res.status(404).json({ message: "Alert not found" });
        res.status(200).json({ message: "Alert deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
