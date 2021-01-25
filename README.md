## CV AMP

Generate your mobile-first Google AMP compliant CV using just a JSON file...

Getting Started

1. Clone the repo: `git clone`
1. Move into the cv-amp directory: `cd cv-amp-json`
1. Edit the values in `cv.json` to your info

**HTML version:**

```
  npm run html
  yarn html (if using yarn)
```

You should now have a `index.html` in the root of the directory :tada::tada::tada:

**PDF version:**

```
  npm run pdf
  yarn pdf (if using yarn)
```

You should now have a `cv.pdf` in the root of the directory :tada::tada::tada:

Star the repo if youre happyy :star:

## Problems

At the moment we're using `puppeteer` to create the PDF. This downloads Chromium (86 MB) - not good. We'll need to switch to an alternative!
