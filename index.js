// fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
//     "content-type": "application/x-www-form-urlencoded",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrftoken": "VdbKwbl8jKmpvrx0o7j0XEhbXzlU5Lcp",
//     "x-ig-app-id": "936619743392459",
//     "x-ig-www-claim": "hmac.AR0SJQ3gaLvJBFaE_sH5lsNnnMPLKiL8jyjZ7jlXNXs1sIXx",
//     "x-instagram-ajax": "ff978a563a27",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://www.instagram.com/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "email=thomas%40liist.com&username=test&first_name=Martin+Mustermann&opt_into_one_tap=false",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// }).then(res => console.log(res))


// what do we want to find out?
const handleToCheck = "thomas__liist"; // should be taken
const emailToCheck = "thomas@liist.com"; // should be taken


// load node fetch
const fetch = require('node-fetch');


// call to instagram server
fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
  "headers": {
    "x-csrftoken": "Xj1IhJwwoC0KwEO1XD3n4ZMXNHGEe44h", // NEEDED TOKEN 1
    "content-type": "application/x-www-form-urlencoded", // NEEDED TO GET USERNAME SUGGESTIONS
    "accept": "*/*",
    // "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
    // "sec-fetch-dest": "empty",
    // "sec-fetch-mode": "cors",
    // "sec-fetch-site": "same-origin",
    // "x-ig-app-id": "936619743392459",
    // "x-ig-www-claim": "hmac.AR0SJQ3gaLvJBFaE_sH5lsNnnMPLKiL8jyjZ7jlXNXs1sIXx",
    // "x-instagram-ajax": "ff978a563a27",
    // "x-requested-with": "XMLHttpRequest",
    // "cookie": "ig_cb=1; ig_did=14BB2FA9-5265-4069-AA96-0EAAB1341319; mid=X4ooIgAEAAF-zcy-G2aGrfkUoJBL; shbid=2039; rur=PRN; datr=A0WkX9QuKarcuztbqq7n2LNr; shbts=1604604622.305379; csrftoken=VdbKwbl8jKmpvrx0o7j0XEhbXzlU5Lcp; urlgen=\"{\\\"2a02:8109:8500:174c:d47b:882:cf3f:c423\\\": 31334\\054 \\\"62.225.173.146\\\": 3320\\054 \\\"2a02:8109:8500:174c:3dff:f2e2:8b16:325c\\\": 31334\\054 \\\"2a02:8109:8500:174c:1dd5:2289:5843:1db6\\\": 31334}:1kbBly:RAuE9t9HFSrt8qvujMw_H_SD7eM\""
  },
  // "referrer": "https://www.instagram.com/",
  // "referrerPolicy": "strict-origin-when-cross-origin",
  // "body": `email=thomas%40liist.com&username=test&first_name=Martin+Mustermann&opt_into_one_tap=false`,
  "body": `email=${encodeURIComponent(emailToCheck)}&username=${encodeURIComponent(handleToCheck)}&first_name=${encodeURIComponent(handleToCheck)}&opt_into_one_tap=false`,
  "method": "POST",
  // "mode": "cors"
}).then(res => {
  console.log(res);
  return res.json();
}).then(data => {
  console.log(data);
  // console.log(Object.values(data.errors));

  console.log(`handle to check: ${handleToCheck}`);
  console.log(`email to check: ${emailToCheck}`);
  // // check handle
  // if (data.errors.email[0].code === "email_is_taken") {
  //   console.log(`email ${emailToCheck} is NOT availible!`);
  // } else {
  //   console.log(`email ${emailToCheck} is availible!`);
  // }

  // // check email
  // if (data.errors.username[0].code === "username_is_taken") {
  //   console.log(`username ${handleToCheck} is NOT availible!`);
  // } else {
  //   console.log(`username ${handleToCheck} is availible!`);
  // }
  debugger;
})

// check tokens later, probably not reusable
// TOKEN saved in cookie. New plan
// => open site with puppeteer,
// => get cookie
// => get token
// => do request
tokens = [
  "QPC9fRn5JnmbrfmIvhQ6WrUtjfGyjirr",
  "VdbKwbl8jKmpvrx0o7j0XEhbXzlU5Lcp",
  "tvUlKb3SguPSuxvXlSHzawc4PJI1rd3o",
  "Xj1IhJwwoC0KwEO1XD3n4ZMXNHGEe44h", // 2020-11-07_02:24:28
]

// fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
//     "content-type": "application/x-www-form-urlencoded",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrftoken": "QPC9fRn5JnmbrfmIvhQ6WrUtjfGyjirr",
//     "x-ig-app-id": "936619743392459",
//     "x-ig-www-claim": "0",
//     "x-instagram-ajax": "b9c0ea6d7d91-hot",
//     "x-requested-with": "XMLHttpRequest",
//     "cookie": "ig_did=88DA26FC-2697-44DE-BA09-EC08AD7E3AB6; csrftoken=QPC9fRn5JnmbrfmIvhQ6WrUtjfGyjirr; mid=X6XwawAEAAFfAgglZdtpq39TzCi5; ig_nrcb=1"
//   },
//   "referrer": "https://www.instagram.com/accounts/emailsignup/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "email=&username=asdfawf&first_name=&opt_into_one_tap=false",
//   "method": "POST",
//   "mode": "cors"
// });
