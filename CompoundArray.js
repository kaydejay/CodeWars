function compoundArray(a, b) {
  let newArr = []
  let aArr = [...a]
  let bArr = [...b] 
  while (aArr.length > 0 && bArr.length > 0){
    newArr.push(aArr.shift())
    newArr.push(bArr.shift())
  }
   return newArr.concat(aArr).concat(bArr)
}

function compoundArray(a, b) {
  let newArr = []
  while (a.length > 0 && b.length > 0){
    newArr.push(a.shift())
    newArr.push(b.shift())
  }
   return newArr.concat(a).concat(b)
}
