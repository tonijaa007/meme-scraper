import puppeteer from 'puppeteer';

const puppeteer = puppeteer;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://kenjimmy.me');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
