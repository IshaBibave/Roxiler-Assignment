const express = require('express');
const mongoose = require('mongoose');
const initializeRoutes = require('./routes/initialize');
const transactionRoutes = require('./routes/transaction');

const app = express();
app.use(express.json());

app.use('/initialize', initializeRoutes);
app.use('/transaction', transactionRoutes);

mongoose.connect('mongodb://localhost:27017/transactions', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')));
