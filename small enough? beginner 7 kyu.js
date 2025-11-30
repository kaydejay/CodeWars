function smallEnough(a, limit){
  let copy = [...a];
  for (let i = 0; i < copy.length; i++){
    if (copy[i] > limit){
      return false
    }if (copy[i] <= limit){
      continue
    }
  }
  return true
}
