// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
const Instagram = require("./Instagram.js");
const extractCSRF = require("./extractCSRF.js");
const extractTEST = require("./extractTEST.js");

exports.validateInstagram = async (req, res) => {
  // get email or handle from query params
  const handle = req.query.handle;
  const email = req.query.email;

  // validate handle + email asynchronously
  const promises = [];
  if (handle) {
    console.log(`running Instagram.checkHandle('${handle}')`);
    promises.push(Instagram.checkHandle(handle));
  }
  if (email) {
    console.log(`running Instagram.checkEmail('${email}')`);
    promises.push(Instagram.checkEmail(email));
  }

  // add error if no valid param given
  const responseObj = {};
  if (!handle && !email) {
    responseObj.error = 'please add a handle or email as query param, e.g. ?handle={handleToTest} or ?email={emailToTest}';
  }

  // return results
  responseObj.results = await Promise.all(promises);
  res.json(responseObj);
};

exports.getCsrfToken = async (req, res) => {
  const response = await extractCSRF.run();
  res.json(response);
}

exports.extractTEST = async (req, res) => {
  const response = await extractTEST.run("https://instagram.com");
  res.json(response);
}

// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`)
// })
