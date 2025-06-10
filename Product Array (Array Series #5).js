function productArray(numbers){
  let product = numbers.reduce((acc, cur) => acc * cur, 1) 
  return numbers.map((number) => product / number )
}
