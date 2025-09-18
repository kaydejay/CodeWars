function stairsIn20(s){
  return s.flat().reduce((acc, cur) => acc + cur, 0) * 20
}
