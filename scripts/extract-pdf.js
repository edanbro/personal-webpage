const fs = require('fs');
const path = require('path');
// pdf-parse exports a function as module.exports, but some environments
// may have it under the default property. Handle both.
// debug: show the exported shape
const pdfPath = path.resolve(__dirname, '..', 'src', 'assets', 'Eduard_Broasca_CV.pdf');

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at', pdfPath);
  process.exit(2);
}

const dataBuffer = fs.readFileSync(pdfPath);
// Strategy 1: use pdf-parse if it exposes PDFParse
try {
  const pdfParse = require('pdf-parse');
  if (pdfParse && pdfParse.PDFParse) {
    console.error('Using pdf-parse.PDFParse for extraction');
    const PDFParse = pdfParse.PDFParse;
    const pdfParser = new PDFParse();
    // pdf-parse prefers a Uint8Array instead of a Buffer
    pdfParser.parseBuffer(new Uint8Array(dataBuffer)).then((data) => {
      console.log('\n--- PDF TEXT START (pdf-parse) ---\n');
      console.log(data.text);
      console.log('\n--- PDF TEXT END ---\n');
    }).catch(err => {
      console.error('pdf-parse failed:', err);
      tryPdfjs();
    });
  } else {
    tryPdfjs();
  }
} catch (e) {
  // pdf-parse not available or failed; try pdfjs-dist
  tryPdfjs();
}

function tryPdfjs() {
  try {
    const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
    (async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ data: dataBuffer });
        const doc = await loadingTask.promise;
        console.error('Pages:', doc.numPages);
        let fullText = '';
        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map(it => it.str);
          fullText += strings.join(' ') + '\n\n';
        }
        console.log('\n--- PDF TEXT START (pdfjs-dist) ---\n');
        console.log(fullText.trim());
        console.log('\n--- PDF TEXT END ---\n');
      } catch (err) {
        console.error('Error parsing PDF with pdfjs-dist:', err);
        fail();
      }
    })();
  } catch (err) {
    console.error('pdfjs-dist not available or failed to load:', err.message || err);
    fail();
  }
}

function fail() {
  console.error('\nUnable to extract text automatically. Options:');
  console.error(' - Provide the original .tex source file if available');
  console.error(' - Install and run poppler-utils/gs (pdftotext) locally and run: pdftotext src\\assets\\Eduard_Broasca_CV.pdf -');
  console.error(' - I can attempt other npm packages if you want (poppler, mupdf)');
  process.exit(1);
}
// End of extraction strategies
