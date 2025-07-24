"use strict";

var express = require('express');

var cors = require('cors');

var translateRoutes = require('./routes/translate');

require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());
app.use('/api/translate', translateRoutes);
app.listen(5000, function () {
  return console.log('Server running on port 5000');
});
//# sourceMappingURL=server.dev.js.map
