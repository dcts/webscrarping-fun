// load service to get CSRF Token
const Instagram = require("./Instagram.js");
const extractCSRF = require("./extractCSRF.js");
const extractTEST = require("./extractTEST.js");

// // Usage Examples
// // get csrfToken from IG with puppeteer
// await Instagram.getCsrfToken();

// // check if handle is taken
// await Instagram.checkHandle("handle-to-check");

// // check if email is taken
// await Instagram.checkEmail("email@example.com");
