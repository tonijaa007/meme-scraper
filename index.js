import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// Fetches HTML Data from URL
const main = async () => {
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  let body = await response.text();

  body = String(body);

  console.log(body);

  // Define Cherio or $ Object
  const $ = cheerio.load(body);

  // Finds the images from HTML Data
  const images = $('div')
    .children()
    .map(function (i, el) {
      return {
        image: $(this).find('.src').text(),
      };
    });
  const imageSource = images.toArray();

  console.log(imageSource);
};

main();
