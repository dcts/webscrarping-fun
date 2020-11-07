const puppeteer = require('puppeteer');

exports.run = async (url) => {
  const browser = await puppeteer.launch({ headless: true, args: ['--disable-dev-shm-usage', '--no-sandbox'] });
  try {
    console.log("opening new context...");
    const context = await browser.createIncognitoBrowserContext();
    console.log("opening new page...");
    const page = await context.newPage();
    console.log("opening url " + url);
    await page.goto(url, { waitUntil: 'networkidle2' });

    console.log("getting cookies");
    var cookies = await page._client.send('Network.getAllCookies');
    cookies = cookies.cookies.map(cookie => {
      cookie.expiresUTC = new Date(cookie.expires * 1000);

      return cookie;
    });

    console.log("filtering eprsinstenCookies");
    var persistantCookies = cookies.filter(c => {
      return !c.session;
    });

    console.log("return result");
    return {
      persistantCookies: persistantCookies,
      persistantCookiesCount: persistantCookies.length,
    };
  } catch (error) {
    console.error(error);
    return error;

  } finally {
    console.log("closing browser");
    await browser.close();
  }
}
