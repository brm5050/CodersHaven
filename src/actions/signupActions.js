// packages
import axios from "axios";

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post("/api/users", userData);
  }
}
/////////////////////////////////////// pseudocode for server /////////////////////////////////////////////

/* match this up to mikes server:
LINK TO VIDEO: https://www.youtube.com/watch?v=gZ_fR6o98dE&index=8&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY
// making users a different file //
import users from "./path/to/file";

app.use("/api/users", users);

// users.js //
import express from "express";

// need to install validator //
import Validator from "validator";

import isEmpty from "lodash/isEmpty";

let router = express.Router();

// isValid is just a checker to see if there were any errors sent back //
function validateInput(data) {
  let errors = {};

  // username //
  if(Validator.isNull(data.email)) {
    errors.email = "User Name field is required.";
  }

  // email //
  if(Validator.isNull(data.email)) {
    errors.email = "Email field is required.";
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = "Email is required.";
  }

  // password //
  if(Validator.isNull(data.password)) {
    errors.email = "Password field is required.";
  }

  if(Validator.isNull(data.passwordConfirm)) {
    errors.email = "Confirm Password field is required.";
  }

  if(!validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = "Passwords do not match."
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post("/", (req, res) => {
  // need to parse the data with req.body, probably already have body-parser //

  // the validateInput function will by default return errors and isValid so we //
  // are defining them in the post request //

  const{errors, isValid} = validateInput(req.body);

  if(!isValid) {
  res.status(400).json(errors);
}

});

export default router;

*/
