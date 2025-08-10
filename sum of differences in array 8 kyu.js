function sumOfDifferences(arr) {
  if (arr.length === 0 || arr.length === 1){
    return 0
  }
  
  let sorted = arr.sort((a,b) => b - a);
  let num = 0;
  for (let i = 0; i < sorted.length-1; i++){
    let diff = sorted[i] - sorted[i+1];
    num += diff
  }
  return num
}
