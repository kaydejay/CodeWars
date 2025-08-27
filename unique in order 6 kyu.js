var uniqueInOrder=function(iterable){
  let arr = [];
  
  for (let i = 0; i < iterable.length; i++){
    if (i == 0){
      arr.push(iterable[i])
    }if (i == iterable.length-1){
      break
    }else if (iterable[i] == iterable[i+1]){
      continue
    }else if (iterable[i] !== iterable[i+1]){
      arr.push(iterable[i+1])
    }
  }
  return arr
}
