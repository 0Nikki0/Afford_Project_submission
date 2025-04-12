const express = require('express');
const cors = require('cors');
const weatherRoute = require('./routes/weather');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Register the /weather route
app.use('/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
