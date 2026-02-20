function accum(s) {
	let upper = s.toUpperCase()
  let split = upper.split('')
  let arr = []
  let lower = s.toLowerCase()
  for (let i = 0; i < upper.length; i++){
    if (i == 0){
      arr.push(upper[i])
    }else{
      arr.push('-' + upper[i] + lower[i].repeat([i]))
      }
  }
  return arr.join('')
}
