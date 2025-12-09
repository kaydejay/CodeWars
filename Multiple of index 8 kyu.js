function multipleOfIndex(array) {
  let copy = [...array];
  let result = [];
  
  for (let i = 0; i < copy.length; i++){
    if (array[i] % i == 0){
      result.push(array[i])
    }if (array[i] == 0 && i == 0){
      result.push(array[i])
    }
  }
  
  return result
}
