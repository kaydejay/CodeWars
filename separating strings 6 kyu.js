function sepStr(str) {
  let words = str.split(' ');
  let colLen = words.reduce((acc, cur) => acc = Math.max(acc, cur.length) ,0)
  
  return buildTable(colLen,words)
}

function buildTable(colLen,words) {
  let table = [];
  
  for (let i = 0; i < colLen; i++){
    table.push(buildRow(words,i));
  }
  
  return table
}

function buildRow(words,letter) {
  let row = [];

  for (let j = 0; j < words.length; j++){
    let curLet = words[j][letter]
    row.push(curLet !== undefined ? curLet : '')
  }
  
  return row
}
