var isSquare = function(n){
  let sqRt = Math.sqrt(n)
  let wholeSqRt = Math.floor(sqRt)
  if (wholeSqRt === sqRt){
    return true
  }else{
    return false
    }
}
