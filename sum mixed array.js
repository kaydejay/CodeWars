function sumMix(x){
  let arr = []

  for (let i = 0; i < x.length; i++){
    if (typeof x[i] === 'string'){
      arr.push(Number(x[i]))    
    }else{
      arr.push(x[i])
    }
  }
  return arr.reduce((acc, curr) => acc + curr, 0)
}
