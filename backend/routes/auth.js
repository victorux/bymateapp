const router = express.Router();
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {
  logout,
  login,
  loginSuccess,
  loginCallback,
} from "../controllers/auth.js"; // import controllers

//// GOOGLE AUTH ROUTES:
// LOGIN WITH GOOGLE
router.get("/google", login());
// LOGIN SUCCESS
router.get("/login/success", loginSuccess);
// LOGIN FAILED
router.get("/google/callback", loginCallback());
// LOGOUT ROUTE
router.get("/logout", logout);

export default router;
