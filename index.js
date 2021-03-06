// !/usr/bin/env node

const fs = require('fs');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');

const data = fs.readFileSync('cv.json').toString('utf-8');
const isPDF = process.argv[2] === '--pdf';
const source = isPDF
  ? console.log('PDF version') || fs.readFileSync('cv-pdf.hbs').toString()
  : console.log('HTML version') || fs.readFileSync('cv.hbs').toString();

const template = handlebars.compile(source);
const context = JSON.parse(data);
const html = template(context);

if (!isPDF) fs.writeFileSync('index.html', html);
else {
  (async () => {
    const options = {
      format: 'A4',
      margin: {
        bottom: '20px',
      },
      path: `${context.basic.first_name}_${context.basic.last_name}.pdf`,
    };
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: 'networkidle0',
    });

    await page.pdf(options);

    await browser.close();
  })();
}
