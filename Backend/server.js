const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { connectDB } = require("./config/db");



connectDB();
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })