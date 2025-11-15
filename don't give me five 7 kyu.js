function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++){
    if (noFive(i)) {
      count++; 
    }
  }
  return count;
}

function noFive (i) {
  return !i.toString().includes('5');
}
