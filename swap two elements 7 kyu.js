function swapTwo(array, a, b) {
  let copy = array;

  let first = copy.findIndex((e) => e === a)
  let last = copy.findLastIndex((e) => e === b)
  
  let temp = copy[first];
  copy[first] = copy[last];
  copy[last] = temp;
  
  return copy
}
