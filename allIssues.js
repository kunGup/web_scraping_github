const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
function allIssues(url, filePath) {
    request(url, cb);
    function cb(err, response, html) {
      if (err) {
        console.log(err);
        return;
      } else {
        addIssues(html, filePath);
      }
    }
}
function addIssues(html, filePath){
    let $=cheerio.load(html)
    let anchorElems = $(
      ".d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0"
    );
    let data=[]
    for(let i=0;i<anchorElems.length;i++){
        let link=$(anchorElems[i]).attr('href')
        data.push(link)
    }
    let strData = JSON.stringify(data);
    let pdfDoc = new PDFDocument();
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(strData);
    pdfDoc.end();
}

module.exports = allIssues;