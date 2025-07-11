// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // serve index.html

app.post('/api/enquiries', (req, res) => {
  console.log('Received Enquiry:', req.body);
  res.json({ message: 'Enquiry received! Thank you.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
