const puppeteer = require('puppeteer');

exports.run = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://instagram.com');

  // click on accept cookies button
  await acceptCookies(page);

  // wait for cookies to be set and extract csrf token
  await page.waitForFunction(() => document.cookie.includes("csrftoken"));
  const cookieStr = await page.evaluate(_ => document.cookie);
  const csrfToken = extractCsrfToken(cookieStr);

  // close browser
  await browser.close();

  // return csrfToken
  return csrfToken;
}

// click on "Akzeptieren" button to accept cookies
async function acceptCookies(page) {
  await page.evaluate(_ => {
    acceptCookieBttn = document.querySelector(".aOOlW.bIiDR");
    acceptCookieBttn.click();
  });
}
// // ALTERNATIVE SOLUTION (depends on language)
// const allButtons = Array.from(document.querySelectorAll("button"));
// const acceptCookieBttn = allButtons.find(bttn => bttn.innerText.toLowerCase().includes("akzeptieren")); // wont work for requests from
// return acceptCookieBttn.innerText;

function extractCsrfToken(cookieStr) {
  return cookieStr.split("csrftoken=")[1].split(";")[0];
}
function getTimestamp() {
  return new Date().toISOString().split("T")[1];
}

