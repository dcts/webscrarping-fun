const extractCSRF = require("./extractCSRF.js");
const fetch = require('node-fetch');

class Instagram {
  static async checkEmail(emailToCheck) {
    // get csrfToken
    const csrfToken = await this.getCsrfToken();
    // trigger request with email
    const response = await fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
      "headers": {
        "x-csrftoken": csrfToken,
        "content-type": "application/x-www-form-urlencoded", // NEEDED TO GET USERNAME SUGGESTIONS
        "accept": "*/*",
      },
      "body": `email=${encodeURIComponent(emailToCheck)}&opt_into_one_tap=false`,
      "method": "POST"
    });
    const data = await response.json();
    // return result
    return {
      email: emailToCheck,
      isAvailable: !data.errors.email,
      error: data.errors.email ? data.errors.email[0].code : null
    };
  }

  static async checkHandle(handleToCheck) {
    // get csrfToken
    const csrfToken = await this.getCsrfToken();
    // trigger request with email
    const response = await fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
      "headers": {
        "x-csrftoken": csrfToken,
        "content-type": "application/x-www-form-urlencoded", // NEEDED TO GET USERNAME SUGGESTIONS
        "accept": "*/*",
      },
      "body": `username=${encodeURIComponent(handleToCheck)}&opt_into_one_tap=false`,
      "method": "POST"
    });
    const data = await response.json();
    // return result
    return {
      handle: handleToCheck,
      isAvailable: !data.errors.username,
      error: data.errors.username ? data.errors.username[0].code : null
    };
  }

  static async getCsrfToken() {
    return await extractCSRF.run();
  }
}

module.exports = Instagram;
