const { BLOCK_DELIMITER, IS_HEADER } = require("./regex-patterns");

const parser = (str) => {
  const blocks = str.split(BLOCK_DELIMITER);
  return blocks.map(block => {
    return  IS_HEADER.test(block);
  });
};

module.exports = {
  parser
}