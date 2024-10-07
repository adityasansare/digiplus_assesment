const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const simRoutes = require('./routes/simroute');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', simRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Activation Test');
});

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB.');
    app.listen(PORT, () => {
        console.log(`DB Connected`);
    });
})
.catch((error) => {
    console.error('Error ', error.message);
});
