function diamond(n){
  //edge cases
  if (n % 2 == 0 || n < 0)
    return null

  return buildDiamond(n);
}

function buildDiamond(n){
  return arrLines(n).join('') + middleLine(n) + arrLines(n).reverse().join('');
}

function arrLines(n){
  let answer = [];
  let numOfLines = Math.floor(n/2);
  for (let i = 0; i < numOfLines; i++){
    let builtLine = buildLine(i,numOfLines)
    answer.push(builtLine)
  }
  return answer
}

function buildLine(currLine, numOfLines){
  let line = ''
  
  let numOfSpaces = numOfLines - currLine
  line += ''.padStart(numOfSpaces,' ' )
  
  let numOfAsterisks = currLine * 2 + 1
  line += ''.padStart( numOfAsterisks, '*')
  
  return line + '\n'
}

function middleLine(n){
  return ''.padStart(n,'*') + '\n'
}
