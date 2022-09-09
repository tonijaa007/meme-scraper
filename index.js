import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import xRay from 'x-ray';

// let url = new URL('https://memegen-link-examples-upleveled.netlify.app/');

// fetches HTML Code FROM Url
let memeURL = fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data));

//converts HTML Code (Object) into a string
memeURL = String(memeURL);
console.log(typeof memeURL);

/*memeURL.toString();

// console.log(memeURL);

const result = typeof memeURL === 'string' ? true : null;
console.log(result);

// const imageFinder = xRay();

// Finds all image sources
/* imageFinder('https://api.memegen.link/images/', 'img', [
  {
    img: '',
    src: '@src',
    width: '@width',
    url: '@url',
  },
]);

console.log(imageFinder);


for (let i = 0; i < imageFinder.length; i++) {
  if (imageFinder[i] === )
}


function getPosition(imageFinder) {
  return imageFinder.startsWith('src');
}
*/

// const re = new RegExp('<img src.*/>');

// imageFinder.match(re);

// const finder = imageFinder.match(re);
// console.log(finder);
