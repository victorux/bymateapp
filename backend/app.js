import userRoutes from "./routes/users.js";
import cookieSession from "cookie-session";
import listingRoutes from "./routes/listings.js";
import authRouts from "./routes/auth.js";
import passport from "passport";
import express from "express";
import passportSetup from "./passport.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["victor"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
// cors middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/auth", authRouts);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
// test
