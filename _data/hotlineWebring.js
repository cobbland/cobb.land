import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('data/hotline-webring.html', 'utf-8')
const $ = cheerio.load(html);
const urls = [];
$("table.redirections > tbody > tr > td.url > a[href]").each((i, el) => {
    const href = $(el).attr("href");
    urls.push(href);
});
const hotlineUrls = [...new Set(urls)];

fs.writeFileSync(
    "data/hotline-urls.js", 
    `export const hotlineUrls = ${JSON.stringify(hotlineUrls, null, 2)};`
);