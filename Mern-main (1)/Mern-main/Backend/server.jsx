const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Chair', price: 5000 },
    { id: 2, name: 'Table', price: 7000 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});