function grow(x){
  let product = 1
  for (let i = 0; i < x.length; i++){
    product = product * x[i]
  }
  return product
}
