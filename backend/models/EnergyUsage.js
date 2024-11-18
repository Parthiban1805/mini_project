const mongoose = require('mongoose');

const EnergyUsageSchema = new mongoose.Schema({
    totalEnergyConsumption: { 
        type: Number, 
        required: true 
    },
    renewableEnergyUsage: { 
        type: Number, 
        required: true 
    },
    energyEfficiencyMeasures: [{ 
        type: String 
    }],
    period: { 
        type: String, 
        required: true, 
        enum: ['monthly', 'annually'] 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('EnergyUsage', EnergyUsageSchema);
