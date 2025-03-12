function XO(str) {
  const lowerStr = str.toLowerCase()
  let arr = lowerStr.split('')
  const countX = arr.filter(e => e === 'x').length
  const countO = arr.filter(e => e === 'o').length
  if (countX === countO){
    return true
  }else{
    return false
  }
}  
