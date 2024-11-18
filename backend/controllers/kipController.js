const KPI = require('../models/kpi');  // Ensure you have a KPI model defined

const getKPIs = async (req, res) => {
    try {
        const kpis = await KPI.find();  
        res.status(200).json(kpis);
    } catch (error) {
        console.error("Error fetching KPIs:", error);
        res.status(500).json({ error: "Failed to retrieve KPIs" });
    }
};

const addKPI = async (req, res) => {
    try {
        console.log("Request body:", req.body);  // Log the incoming request body
        const { type, target, currentValue, units } = req.body;

        if (!type || target === undefined || currentValue === undefined || !units) {
            return res.status(400).json({ error: "Please provide all required fields" });
        }

        const newKPI = new KPI({ type, target, currentValue, units });
        const savedKPI = await newKPI.save();
        res.status(201).json(savedKPI);
    } catch (error) {
        console.error("Error saving KPI:", error);
        res.status(500).json({ error: "Failed to save KPI" });
    }
};
module.exports = { getKPIs, addKPI };
