function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0 ){
      return []
  }
  
  let positive = input.filter(num => num > 0).length;
  let negative = 0;
  
  for (let i = 0; i < input.length; i++){
    if(input[i] < 0){
      negative += input[i]
    }
  }  
  return [positive, negative]
}
