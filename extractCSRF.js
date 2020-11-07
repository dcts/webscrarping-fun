const puppeteer = require('puppeteer');

exports.run = async () => {
  console.log("launching puppeteer...");
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
    ]
  });
  console.log("opening new context...");
  const context = await browser.createIncognitoBrowserContext();
  console.log("opening new page...");
  const page = await context.newPage();

  // console.log("launching puppeteer");
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  console.log("opening instagram.com");
  await page.goto('https://instagram.com');

  // click on accept cookies button
  console.log("acceppting cookies");
  await acceptCookies(page);

  // wait for cookies to be set and extract csrf token
  console.log("waiting for csrf token, max timeout 10 sec");
  await page.waitForFunction(() => document.cookie.includes("csrftoken"), { timeout: 10000 });
  const cookieStr = await page.evaluate(_ => document.cookie);
  const csrfToken = extractCsrfToken(cookieStr);
  console.log("extracted csrf token => " + csrfToken);

  // close browser
  console.log("closing browser");
  await browser.close();

  // return csrfToken
  console.log("returning csrf token => " + csrfToken);
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
