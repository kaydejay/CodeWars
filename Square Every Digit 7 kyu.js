function squareDigits(num){
  let split = num.toString().split('');
  let result = '';
  for (let i = 0; i < split.length; i++){
    result += split[i] * split[i]
  }
  return Number(result)
}
