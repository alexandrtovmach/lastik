const { BLOCK_DELIMITER, HEADER, PARAGRAPH } = require("./regex-patterns");

const parser = (str) => {
  const blocks = str.split(BLOCK_DELIMITER);
  const nodes = [];
  for (let i = 0; i < blocks.length; i++) {
    let tempMatch = HEADER.exec(blocks[i]);
    if (tempMatch) {
      const [match, level] = tempMatch;
      nodes[i] = {
        length: match.length,
        type: `h${level.length}`
      }
      continue;
    }

    tempMatch = PARAGRAPH.exec(blocks[i]);
    if (tempMatch) {
      const [match] = tempMatch;
      nodes[i] = {
        length: match.length,
        type: 'p'
      }
      continue;
    }
  }
  return nodes;
};

module.exports = {
  parser
}