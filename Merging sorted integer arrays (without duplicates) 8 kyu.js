function mergeArrays(a, b) {
  let concat = (a.concat(b));
  let sorted = concat.sort((a,b) => a - b);
  let set =  new Set(sorted);
  return Array.from(set)
}
