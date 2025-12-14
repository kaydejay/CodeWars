function minValue(values){
  let sorted = values.sort((a,b) => a - b)
  let set = new Set (sorted);
  let sortedArr = Array.from(set)
  let result = ''
  
  for (let i = 0; i < sortedArr.length; i++){
    result += sortedArr[i]
  }
  
  return parseInt(result)
}
