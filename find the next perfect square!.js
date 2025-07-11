function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq)) === false){
    return -1
  }
  let squareRoot = Math.sqrt(sq)
  let nextSqrt = squareRoot + 1
  return nextSqrt * nextSqrt
}
