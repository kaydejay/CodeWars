function smallEnough(a, limit){
  let func = (e) => e <= limit;
  return a.every(func)
}
