require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.info('DB connection established');
  })
  .catch((err) => {
    console.error(`DB connection failed, error: ${err.message}`);
  });

module.exports = mongoose;
