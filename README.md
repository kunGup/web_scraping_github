
# Github scrapper

This project scarps the top issues of the randomly listed popular repos on the [Github topics page](https://github.com/topics).


## Run Locally

Clone the project

```bash
  git clone https://github.com/kunbeg/web_scraping_github.git
```

Go to the project directory

```bash
  cd web_scraping_github
```

Install dependencies

```bash
  npm install
```

Run the command

```bash
  node main
```


## Features

- A directory named "topics" will be generated
- Inside the directory 3 Topic's folder will be added each time the main.js gets executed
- Each Topic's folder will contain 8 repo pdfs containing top issues of the repos.


## Tech Stack

Node.js 

**npm packages** - request, cheerio, pdfkit

