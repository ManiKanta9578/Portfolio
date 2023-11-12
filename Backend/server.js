const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./config/db");
const portfolioRoutes = require("./routes/portfolioRoutes");

connectDB();

app.use(express.json());

app.use("/api", portfolioRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
