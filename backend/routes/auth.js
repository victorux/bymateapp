import express from "express";
const router = express.Router();
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

// import { login, loginCallback, register, logout } from "../controllers/auth.js";

// router.get("/google", login);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/login/success", (req, res) => {
  console.log("req.user:", req.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/google/callback", loginCallback);

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "User has successfully authenticated",
//       user: req.user,
//       //   cookies: req.cookies,
//     });
//   } else {
//     res.json({
//       success: false,
//       message: "User has not authenticated",
//     });
//   }
// });

// router.post("logout", logout);

// router.post("register", register);

export default router;
