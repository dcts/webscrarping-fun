// load service to get CSRF Token
const extractCSRF = require("./extractCSRF.js");
const Instagram = require("./Instagram.js");


// get N csfr tokens at once service
// (async () => {
//   const n = 100;

//   const promises = []
//   for (let i = 0; i < n; i++) {
//     promises.push(extractCSRF.run());
//   }

//   const tokens = await Promise.all(promises);
//   console.log(tokens.join("\n"));
// })();
