function twoSum(numbers, target) {
  let obj = {};

  for (let i = 0; i < numbers.length; i++){
    let need = target - numbers[i];
    console.log(`have: ${numbers[i]}`)
    console.log(`need: ${need}`)
    if (need in obj){
      console.log('--------------------')
      return [i, obj[need]]
    }
    
    obj[numbers[i]] = i
    console.log(obj)
  }
}
