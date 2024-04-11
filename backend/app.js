const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.addListener("error", (err) => {
  console.log(err);
});

// create

// read

// update

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
