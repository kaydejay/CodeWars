function adjacentElementsProduct(array) {
  let copy = [...array];
  let product = copy[0] * copy[1];
  
  if (copy.length == 2){
    return product
  }
  
  for (let i = 1; i < copy.length; i++){
    if ((copy[i] * copy [i+1]) > product){
      product = (copy[i] * copy[i+1])
    } 
  }
  return product
}
