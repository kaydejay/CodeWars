function diff(a, b){
  let result = [];
  let setA = new Set(a);
  let setB = new Set(b);

  for (let letter of setA){
    if (!setB.has(letter)){
      result.push(letter)
    }
  }
  
  for (let letter of setB){
    if (!setA.has(letter)){
      result.push(letter)
    }
  }
  
  return result.sort();
}
