function inAscOrder(arr) {
  //O(n) always
  for(let i = 1; i < arr.length; i++){
    if (arr[i] < arr [i-1])
      return false
  }
  return true
}

// function inAscOrder(arr) {
// //O(n logn) best O(n^2) worst
//   return arr.join('') === arr.sort((a,b) => a-b).join('');
// }
