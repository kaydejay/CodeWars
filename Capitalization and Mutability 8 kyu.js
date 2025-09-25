function capitalizeWord(word) {
  let arr = word.split('')
  let capital = word[0].toUpperCase();
  let spliced = arr.splice(1, word.length).join('')
  return capital+spliced
}
