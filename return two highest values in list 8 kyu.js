function twoHighest(arr) {
  let arrSet = new Set(arr);
  let newArr = Array.from(arrSet).sort((a,b) => b - a);
  
  return arr.length < 2 ? arr : [newArr[0], newArr[1]]
}
