function evenNumbers(array, number) {
  let copy = [...array];
  let result = [];
  
  for (let i = 0; i < copy.length; i++){
    if (copy[i] % 2 == 0){
      result.push(copy[i])
    }
  }
  
  return result.slice(-number)
}
