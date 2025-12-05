function findEvenIndex(arr) {
  let rSum = arr.reduce((acc, cur)=> acc + cur, 0);
  
  let lSum = 0;
  
  for (let i = 0; i < arr.length; i++){
    rSum -= arr[i];
    if (rSum == lSum){
      return i
    }
    
    lSum += arr[i] 
  }

  return -1
}
