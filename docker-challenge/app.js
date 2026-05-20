const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/myapp';

mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB verbunden'))
  .catch((err) => console.log('MongoDB Fehler:', err));

app.get('/', (req, res) => {
  res.send('Hello from Docker mit MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});