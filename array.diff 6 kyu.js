function arrayDiff(a, b) {
  let result = []
  const hash = {};

  for (const item of b) {
    hash[item] = true; 
  } 
  
  for (let i = 0; i < a.length; i++){
    if ( !(a[i] in hash) ){
      result.push(a[i])
    }
  }
  
  return result
}
