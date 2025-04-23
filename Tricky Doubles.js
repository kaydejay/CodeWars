function trickyDoubles(n){
  let str = n.toString()

  if (str.length === 1){
    return (n*2)
  }else if(str.length % 2 === 1){
    return (n*2)
  }

  let x = str.substring(0,str.length/2)
  let y = str.substring(str.length/2)

  return x === y ? n : n*2
  
}
