function betterThanAverage(classPoints, yourPoints) {
  let cpSum = classPoints.reduce((acc, cur) => acc + cur, 0)
  let total = cpSum + yourPoints
  let average = total/(classPoints.length + 1)
  
  return yourPoints > average ? true : false;
}
