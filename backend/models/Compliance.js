const mongoose = require('mongoose');

const ComplianceSchema = new mongoose.Schema({
    emissionStandard: { 
        type: String, 
        required: true 
    },
    complianceGoal: { 
        type: Number, 
        required: true 
    },
    complianceDeadline: { 
        type: Date, 
        required: true 
    },
    budgetAllocated: { 
        type: Number, 
        required: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Compliance', ComplianceSchema);
