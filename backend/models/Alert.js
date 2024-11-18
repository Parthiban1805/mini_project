const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    metric: { 
        type: String, 
        required: true 
    },
    thresholdValue: { 
        type: Number, 
        required: true 
    },
    currentValue: { 
        type: Number, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    user: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['active', 'resolved'], 
        default: 'active' 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Alert', AlertSchema);
