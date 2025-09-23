function findShort(s){
  let arr = s.split(' ')
  let sorted = arr.sort((a,b) => a.length - b.length);
  return sorted[0].length
}
