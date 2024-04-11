const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.addListener("error", (err) => {
  console.log(err);
});

// create
app.post("/books", (req, res) => {
  const { title, description, cover } = req.body;
  db.query(
    "INSERT INTO books (title, description, cover) VALUES (?, ?, ?)",
    [title, description, cover],
    (err, data) => {
      if (err) return res.json(err);
      return res.json("Book added successfully");
    }
  );
});

// read

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// update

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
