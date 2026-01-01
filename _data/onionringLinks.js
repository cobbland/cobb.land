import fs from 'fs';
import * as cheerio from 'cheerio';
import { woodPaneledSites } from '../data/onionring-variables.js';

const ownUrl = 'https://cobb.land/'

const htmlPath = '_includes/layout.html';
const html = fs.readFileSync(htmlPath, 'utf-8');
const $ = cheerio.load(html);
let lastLink = woodPaneledSites[
    (woodPaneledSites.findIndex(item => item.url === ownUrl)) - 1
].url;
let nextLink = woodPaneledSites[
    (woodPaneledSites.findIndex(item => item.url === ownUrl)) + 1
].url;
$("#woodpaneled-last").attr("href", lastLink);
$("#woodpaneled-next").attr("href", nextLink);
fs.writeFileSync(htmlPath, $.html(), 'utf-8');