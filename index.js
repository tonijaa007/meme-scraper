import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const main = async () => {
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  let body = await response.text();

  body = String(body);

  console.log(body);

  const $ = cheerio.load(body);

  const images = $('a')
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
