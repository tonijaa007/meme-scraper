import * as cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';
import request from 'request';

// Create a Write Stream
const writeStream = fs.createWriteStream('imagesLink.txt', 'UTF-8');

request(
  'https://memegen-link-examples-upleveled.netlify.app',
  (err, resp, html) => {
    if (!err && resp.statusCode === 200) {
      console.log('Request was success');

      // Define Cheerio or $ Object
      const $ = cheerio.load(html);
      $('img').each((index, image) => {
        const img = $(image).attr('src');

        console.log(img);
      });
    } else {
      console.log('Request failed');
    }
  },
);
