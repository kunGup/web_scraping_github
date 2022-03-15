const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path=require("path")
const allIssues = require("./allIssues");
function getReposLink(url,topicName,topicsPath) {
  request(url, cb);
  function cb(err, response, html) {
    if (err) {
      console.log(err);
      return;
    }else if (response.statusCode==404) {
      console.log("404");
      return;
    } else {
      allRepos(html, topicName,topicsPath);
    }
  }
  function allRepos(html, topicName, topicsPath) {
    let $ = cheerio.load(html);
    let anchorElems = $(".text-bold.wb-break-word");
    for (let i = 0; i < 8; i++) {
      let link = $(anchorElems[i]).attr("href");
      let repoName = link.split("/").pop();
      let filePath = path.join(topicsPath, topicName, `${repoName}.pdf`);
      let fullLink = "https://github.com" + link + "/issues";
      console.log(fullLink);
      allIssues(fullLink, filePath);
    }
  }
}
module.exports = getReposLink;