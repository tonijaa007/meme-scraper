import cheerio from 'cheerio';
import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import xRay from 'x-ray';

// fetches HTML Code FROM Url
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

// saves the html into a string
const body = await response.text();

console.log(typeof body);

/* const images = $(".src")
  .children()
  .map(function (i, el) {
    return {
      name: ${this}.find(".src").text();
    }
  })
  .toArray();

  console.log(images); */
