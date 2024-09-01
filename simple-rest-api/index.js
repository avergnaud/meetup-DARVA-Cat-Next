const express = require('express');
const cors = require('cors');
const { calculateStats } = require('./statsHelpers');

const appnames = ['next-rsc-cache','react-load-data'];
const metricnames = ['FCP','LCP'];

const app = express();
// Enable CORS for all requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// In-memory list to store JSON objects
const requestsList = [];

// Handle all POST requests
app.post('*', (req, res) => {
    requestsList.push(req.body);
    // Respond with a success message
    res.status(200).json({ message: 'Request logged successfully' });
});

// GET endpoint to retrieve all stored requests
app.get('/stats', (req, res) => {

    const stats = calculateStats(requestsList, appnames, metricnames);

    // Respond with the mean and median
    res.json(stats);
});

// Start the server
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
