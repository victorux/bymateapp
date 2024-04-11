import passport from "passport";

export const login = () =>
  passport.authenticate("google", {
    scope: ["profile", "email"],
  });

export const loginCallback = () =>
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  });

export const register = (req, res) => {
  // check if the user already exists
  // if not, create a new user
  // hash the password
  // save the user to the database
  // generate a token
  // send the token to the user
  // return the user
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};
