function counterEffect(hitCount) {
  let result = [];
  
  for (let i = 0; i < hitCount.length; i++){
    let arr = [];
    for (let j = 0; j <= hitCount[i]; j++){
      arr.push(j) 
    }
    result.push(arr)
  }
  return result
}
