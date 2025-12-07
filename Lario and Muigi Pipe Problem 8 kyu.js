function pipeFix(numbers){
  let copy = [...numbers];
  let result = [];

  for (let i = copy[0]; i <= copy[copy.length-1]; i++){
    result.push(i)
  }
  
  return result
}
