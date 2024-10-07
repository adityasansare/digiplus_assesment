const express = require('express');
const router = express.Router();
const SimCard = require('../models/simcard')

// Add New SIM Card
// POST /add-sim
router.post('/add-sim', async (req, res) => {
    const { simNumber, phoneNumber } = req.body;

    // Validate input
    if (!simNumber || !phoneNumber) {
        return res.status(400).json({ message: 'Please provide SIM Number and Phone Number' });
    }

    try {
        // Check if SIM card already exists
        const existingSim = await SimCard.findOne({ simNumber });

        if (existingSim) {
            return res.status(400).json({ message: 'SIM Card with this SIM Number already exists.' });
        }

        // Create new SIM card
        const newSimCard = new SimCard({
            simNumber,
            phoneNumber,
            status: 'inactive', // Default status
            activationDate: null
        });

        await newSimCard.save();

        return res.status(201).json({ message: 'SIM Card added successfully.', simCard: newSimCard });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error.', error: error.message });
    }
});

// Activate SIM Card
// POST /activate
router.post('/activate', async (req, res) => {
    const { simNumber } = req.body;

    if (!simNumber) {
        return res.status(400).json({ message: 'SIM Number is required.' });
    }

    try {
        const simCard = await SimCard.findOne({ simNumber });

        if (!simCard) {
            return res.status(404).json({ message: 'SIM Card not found.' });
        }

        if (simCard.status === 'active') {
            return res.status(400).json({ message: 'SIM Card is already active.' });
        }

        simCard.status = 'active';
        simCard.activationDate = new Date();

        await simCard.save();

        return res.status(200).json({ message: 'SIM Card activated successfully.', simCard });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error.', error: error.message });
    }
});

// Deactivate SIM Card
// POST /deactivate
router.post('/deactivate', async (req, res) => {
    const { simNumber } = req.body;

    if (!simNumber) {
        return res.status(400).json({ message: 'SIM Number is required.' });
    }

    try {
        const simCard = await SimCard.findOne({ simNumber });

        if (!simCard) {
            return res.status(404).json({ message: 'SIM Card not found.' });
        }

        if (simCard.status === 'inactive') {
            return res.status(400).json({ message: 'SIM Card is already inactive.' });
        }

        simCard.status = 'inactive';

        await simCard.save();

        return res.status(200).json({ message: 'SIM Card deactivated successfully.', simCard });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error.', error: error.message });
    }
});

// Get SIM Details
// GET /sim-details/simNumber
router.get('/sim-details/:simNumber', async (req, res) => {
    const { simNumber } = req.params;

    try {
        const simCard = await SimCard.findOne({ simNumber });

        if (!simCard) {
            return res.status(404).json({ message: 'SIM Card not found.' });
        }

        return res.status(200).json({ simCard });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error.', error: error.message });
    }
});

module.exports = router;
