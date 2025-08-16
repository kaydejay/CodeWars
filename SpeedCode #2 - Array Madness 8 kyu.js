function arrayMadness(a, b) {
  let squares = [];
  let cubes = [];

  for (let i = 0; i < a.length; i++){
    let squared = a[i] ** 2
    squares.push(squared)
  }
  for (let i = 0; i < b.length; i++){
    let cubed = b[i] ** 3
    cubes.push(cubed)
  }
  
  let squaresSum = squares.reduce((acc, cur) => acc + cur, 0)
  let cubesSum = cubes.reduce((acc, cur) => acc + cur, 0)
  
  if (squaresSum > cubesSum){
    return true
  }else{
    return false
  }
}
