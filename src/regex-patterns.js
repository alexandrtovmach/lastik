const CHARS = `\\w\\d— -,."'\``;
const langRanges = [
  '\\u0400-\\u04FF\\u0500-\\u052F', // cyrillic
  '\\u0370-\\u03FF\\u1F00-\\u1FFF', // greek
  '\\u0900-\\u097F', // hindi
  '\\ud86e\\udc00-\\udc1d。\\u3041-\\u3096\\u309D-\\u309F\\uD82C\\uDC01\\uD83C\\uDE00\\u30A1-\\u30FA\\u30FD-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF6F\\uFF71-\\uFF9D\\uD82C\\uDC00\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uDC00-\\uDFFF\\uD869\\uDC00-\\uDED6\\uDF00-\\uDFFF\\uD86D\\uDC00-\\uDF34\\uDF40-\\uDFFF\\uD86E\\uDC00-\\uDC1D\\uDC20-\\uDFFF\\uD873\\uDC00-\\uDEA1\\uD87E\\uDC00-\\uDE1D\\u0600-\\u06FF\\u0590-\\u05FF', // chinese
  '\\u3041-\\u3096\\u309D-\\u309F\\uD82C\\uDC01\\uD83C\\uDE00ー', // hiragana 
  '\\u0600-\\u06FF', // arabic
  '\\u0590-\\u05FF', // hebrew
];

module.exports = {
  BLOCK_DELIMITER: new RegExp(`\\n{2,}`),
  HEADER: new RegExp(`^(#+)\\s{0,}?[${CHARS}${langRanges.join("")}]+$`, "i"),
  PARAGRAPH: new RegExp(`^\\s{0,}?[${CHARS}${langRanges.join("")}]+$`, "i")
} 