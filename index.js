// !/usr/bin/env node

const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const puppeteer = require("puppeteer");

const context = fs.readFileSync("cv.json").toString("utf-8");
const isPDF = process.argv[2] === "--pdf";
const source = isPDF
  ? console.log("PDF version") || fs.readFileSync("cv-pdf.hbs").toString()
  : console.log("HTML version") || fs.readFileSync("cv.hbs").toString();

const template = handlebars.compile(source);

const html = template(JSON.parse(context));

if (!isPDF) fs.writeFileSync("index.html", html);
else {
  (async () => {
    const options = {
      format: "A4",
      margin: {
        bottom: "20px"
      },
      displayHeaderFooter: false,
      printBackground: true,
      path: "cv.pdf"
    };
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      headless: true
    });
    const page = await browser.newPage();
    await page.goto(`data:text/html,${html}`, {
      waitUntil: "networkidle0"
    });
    await page.setViewport({
      width: 1268,
      height: 800
    });
    await page.pdf(options);
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
      };
    });

    await browser.close();
  })();
}
