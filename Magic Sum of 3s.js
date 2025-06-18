function magicSum(numbers) {
  let arr = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 1 && numbers[i].toString().includes('3')){
      arr.push(numbers[i])
    }
  } 
  return arr.reduce((acc, curr) => acc + curr, 0)
}
