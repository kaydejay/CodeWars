var number = function(busStops){
  let flat = busStops.flat()
  let answer = 0
  
  for (let i = 0; i < flat.length; i++){
    if (i % 2 === 0){
      answer += flat[i]
    }else if(i % 2 === 1){
      answer -= flat[i]
    }
  }
  return answer
}
