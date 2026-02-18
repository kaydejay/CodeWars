function maxProduct(numbers, size){
  let copy = [...numbers];
  
  let sorted = copy.sort((a,b) => a - b);
  let slice = sorted.slice(-size)
  return slice.reduce((acc, cur) => acc * cur)  
}
