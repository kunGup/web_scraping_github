const request=require("request")
const cheerio=require("cheerio")
const path=require("path")
const fs=require("fs")
const getReposLink = require("./allRepos");
const url = "https://github.com/topics";
const topicsPath = path.join(__dirname, "topics");
dirCreater(topicsPath);

request(url,cb)
function cb(err,response,html){
    if (err) {
      console.log(err);
      return;
    } else {
      getTopicLinks(html);
    }
}
function getTopicLinks(html){
    let $=cheerio.load(html)
    let anchorElems = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0;i<3;i++){
        let link=$(anchorElems[i]).attr("href")
        let topicName=link.split('/')[2]
        let dirPath = path.join(topicsPath, topicName);
        dirCreater(dirPath);
        let fullLink = "https://github.com" + link;
        getReposLink(fullLink, topicName,topicsPath);
    }
}
function dirCreater(path) {
  if (fs.existsSync(path) == false) {
    fs.mkdirSync(path);
  }
}