function scrabbleScore(str){
  let strToUpper = str.toUpperCase()
  let sum = 0
  for (let i = 0; i < str.length; i++){
    let char = strToUpper[i]
    if ($dict[char]) sum += $dict[char]
  }
  return sum
}

function scrabbleScore(str){
  let output = 0;
  for (let i = 0; i < str.length; i++) {
    output += $dict[str[i].toUpperCase()] || 0;
  }
  return output;
}

function scrabbleScore(str){
  let upperStr = str.toUpperCase();
  let sum = 0;
  for (let i = 0; i < str.length; i++){
    sum += $dict[upperStr[i]] || 0;
  }
  return sum
}
