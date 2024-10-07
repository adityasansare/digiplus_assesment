const mongoose = require('mongoose');

const SimCardSchema = new mongoose.Schema({
    simNumber: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    activationDate: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('SimCard', SimCardSchema);
