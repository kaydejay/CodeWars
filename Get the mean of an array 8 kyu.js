function getAverage(marks){
  let reduced = marks.reduce((acc, cur)=> acc + cur, 0)
  return Math.floor(reduced / marks.length)
}
