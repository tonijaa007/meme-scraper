import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import xRay from 'x-ray';

// let url = new URL('https://memegen-link-examples-upleveled.netlify.app/');
// fetches HTML Code FROM Url
const memeURL = fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data));

// console.log(memeURL);

const imageFinder = xRay();

imageFinder('https://api.memegen.link/images/', '.img', [
  {
    img: '',
    src: '@src',
    width: '@width',
    url: '@url',
  },
]).write('results.json');

console.log(imageFinder);
