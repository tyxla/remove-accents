const regenerate = require('regenerate')

// unicode combining marks
// see: https://github.com/pelias/pelias/issues/829#issuecomment-542614645
// ref: https://en.wikipedia.org/wiki/Combining_character
const COMBINING_MARKS = regenerate()
  .add(0x200D) // ZERO WIDTH JOINER (U+200D)
  .addRange(0x0300, 0x036F) // Combining Diacritical Marks (0300–036F)
  .addRange(0x1AB0, 0x1AFF) // Combining Diacritical Marks Extended (1AB0–1AFF)
  .addRange(0x1DC0, 0x1DFF) // Combining Diacritical Marks Supplement (1DC0–1DFF)
  .addRange(0x20D0, 0x20FF) // Combining Diacritical Marks for Symbols (20D0–20FF)
  .addRange(0xFE00, 0xFE0F) // Variation Selectors (FE00-FE0F)
  .addRange(0xFE20, 0xFE2F) // Combining Half Marks (FE20–FE2F)
  .add(0x3099) // combining dakuten (U+3099)
  .add(0x309A) // combining handakuten (U+309A)
  .toRegExp('g')

const removeAccents = function (string) {
  return string
    .normalize('NFKD')
    .replace(COMBINING_MARKS, '')
    .normalize('NFKC')
}

const hasAccents = function (string) {
  return string !== removeAccents(string)
}

module.exports = removeAccents
module.exports.has = hasAccents
module.exports.remove = removeAccents
