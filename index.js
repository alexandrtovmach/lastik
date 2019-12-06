const { readFile } = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "/files/basic.md");

const getFile = filePath => {
  const file = readFile(filePath, { encoding: "utf-8" }, (err, data) =>
    console.log(data)
  );
};

getFile(FILE_PATH);
