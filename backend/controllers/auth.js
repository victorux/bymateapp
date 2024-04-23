import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

// LOGIN
export const login = () =>
  passport.authenticate("google", { scope: ["profile"] });

//
export const loginSuccess = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      cookies: req.cookies,
    });
  }
};

// LOGIN CALLBACK
export const loginCallback = () =>
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  });

// LOGOUT
export const logout = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};
