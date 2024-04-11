import userRoutes from "./routes/users.js";
import listingRoutes from "./routes/listings.js";
import authRouts from "./routes/auth.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";

const app = express();
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

// Routes
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/auth", authRouts);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
