const express = require('express');
const cors = require('cors');
const translateRoutes = require('./backend/routes/translate');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/translate', translateRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));