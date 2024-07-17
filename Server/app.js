const express = require("express");
const pool = require("./config/dbConfig");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookiParser = require("cookie-parser");
const port = process.env.PORT;



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookiParser());
app.use(express.json());


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});


