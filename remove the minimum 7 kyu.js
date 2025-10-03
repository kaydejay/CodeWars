function removeSmallest(numbers) {
  let copy = [...numbers];
  let min = Math.min(...copy);
  let index = copy.indexOf(min)
  let result = [];

  for (let i = 0; i < copy.length; i++){
    if (i !== index){
      result.push(copy[i])
    }
  }
  return result
}
