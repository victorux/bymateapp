export const login = (req, res) => {
  // check if the user exists
  // if not, return an error
  // compare the password
  // if the password is incorrect, return an error
  // generate a token
  // send the token to the user
  // return the user
};

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
  // remove the token
  // return a success message
};
