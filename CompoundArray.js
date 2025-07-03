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
