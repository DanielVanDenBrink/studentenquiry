const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html from root folder

// Handle POST from HTML form and forward to MuleSoft
app.post('/api/enquiries', async (req, res) => {
  const enquiryData = req.body;

  try {
    // Forward to MuleSoft CloudHub webhook/API
    const muleResponse = await axios.post(
      'https://student-enquiry-api-h2jtzl.5sc6y6-3.usa-e2.cloudhub.io/api/enquiries',
      enquiryData,
      {
        headers: {
          'Content-Type': 'application/json',
          // Add any auth headers if needed
        },
        timeout: 5000
      }
    );

    res.json({ message: 'Your enquiry was submitted successfully!' });
  } catch (error) {
    console.error('Error sending to MuleSoft:', error.message);
    res.status(500).json({ message: 'Failed to send your enquiry. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
