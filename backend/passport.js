import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import env from "dotenv";
import { db } from "./connect.js";
env.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Check if the user exists in the database
      db.query(
        "SELECT * FROM users WHERE google_id = ?",
        [profile.id],
        function (err, rows) {
          if (err) return done(err); // If there is an error, return the error
          if (rows.length) {
            // If the user exists, return the user data
            return done(null, rows[0]);
          } else {
            // If the user does not exist, insert them into the database
            const newUser = {
              google_id: profile.id,
              full_name: profile.displayName,
              profile_img: profile.photos[0].value,
            };
            db.query(
              "INSERT INTO users SET ?",
              newUser,
              function (err, result) {
                if (err) return done(err); // If there is an error, return the error
                newUser.id = result.insertId; // Assign the newly created user ID
                return done(null, newUser);
              }
            );
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
