function squareSum(numbers){
  if (numbers.length == 0){
    return 0
  }else{
    let squaredNumbers = numbers.map(number => number ** 2);
    return result = squaredNumbers.reduce((a,c) => a+c,0);
    }
  }
