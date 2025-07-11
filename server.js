const axios = require('axios');

app.post('/api/enquiries', async (req, res) => {
  const enquiry = req.body;

  try {
    const muleResponse = await axios.post('https://student-enquiry-api-h2jtzl.5sc6y6-3.usa-e2.cloudhub.io/api/enquiry-webhook', enquiry);
    res.json({ message: 'Enquiry sent to MuleSoft successfully!' });
  } catch (err) {
    console.error('Error forwarding to MuleSoft:', err.message);
    res.status(500).json({ message: 'Failed to send to MuleSoft' });
  }
});
