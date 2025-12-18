function multiply(number){
  let abs = Math.abs(number);
  let length = Number(abs.toString().length);
  return Math.pow(5, length) * number;
}
