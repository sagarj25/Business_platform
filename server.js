// Load environment variables
require("dotenv").config();
const express = require("express");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;




app.get("/getRequest", (req, res) => {
  res.send("get request API is running...");
});

app.post("/postRequest", (req, res) => {
  res.send("post request API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
