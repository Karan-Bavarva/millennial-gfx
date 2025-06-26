const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Millennial API is running');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  res.status(200).json({ message: 'Form received' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
