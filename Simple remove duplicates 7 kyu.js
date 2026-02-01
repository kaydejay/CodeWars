function solve(arr) {
  let copy = [...arr];
  let result = [];
  
  for (let i = copy.length - 1; i >= 0; i--) {
    if (!result.includes(copy[i])) {
      result.unshift(copy[i]);
    }
  }
  return result;
}
