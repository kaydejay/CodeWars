function sumArray(array) {
  if (array == null || array.length == 0 || array.length == 1 || array.length == 2){
    return 0
  }
  let sorted = array.sort((a,b) => a - b);
  let newArr = sorted.pop();
  let againArr = sorted.shift();
  
  let result = sorted.reduce((acc, cur) => acc + cur, 0);
  return result
}
