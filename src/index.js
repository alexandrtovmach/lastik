const { readFile } = require("fs");
const path = require("path");

const { parser } = require("./parse");

// const FILE_PATH = path.join(__dirname, "../files/headers.md");
// const FILE_PATH = path.join(__dirname, "../files/paragraphs.md");
const FILE_PATH = path.join(__dirname, "../files/basic.md");

const getFile = filePath => {
  readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    const parsed = parser(data);
    console.log(parsed);
  })
};

getFile(FILE_PATH);
