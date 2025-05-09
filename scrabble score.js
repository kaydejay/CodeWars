function scrabbleScore(str){
  let strToUpper = str.toUpperCase()
  let sum = 0
  for (let i = 0; i < str.length; i++){
    let char = strToUpper[i]
    if ($dict[char]) sum += $dict[char]
  }
  return sum
}
