function minMinMax(array) {
  let sorted = array.sort((a,b) => a - b);
  let min = sorted[0];
  let max = sorted[sorted.length-1];
  let small = min + 1;

  for (let i = 0; i < sorted.length; i++){
    if (small == sorted[i]){
      small += 1
    }
  }
  return [min, small, max]
}
