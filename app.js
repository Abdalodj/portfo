const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");
const resumeRoutes = require("./routes/resume");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('assets'));

app.use('/', resumeRoutes);

module.exports = app;