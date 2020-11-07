const extractCSRF = require("./extractCSRF.js");

class Instagram {
  static async handleIsAvailible(handleToCheck) {

  }

  static async handleIsValid(handleToCheck) {
  }

  static async emailIsAvailible(emailToCheck) {
  }

  static async getCsrfToken() {
    return await extractCSRF.run();
  }
}

module.exports = Instagram;
