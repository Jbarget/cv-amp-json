## CV AMP

Generate your mobile-first Google AMP compliant CV using just a JSON file...

Getting Started

1. Clone the repo: `git clone`
1. Move into the cv-amp directory: `cd cv-amp`
1. Edit the values in `cv.json` to your info
1. Run `node index.js`
1. You should now have a `index.html` in the root of the directory :tada::tada::tada:
1. Star the repo :star:

If you want to download your CV as a PDF then run `node index.js --pdf` which produces `cv.pdf` file.

## Problems

At the moment we're using `puppeteer` to create the PDF. This downloads Chromium (86 MB) - not good. We'll need to switch to an alternative!
