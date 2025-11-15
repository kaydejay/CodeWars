function bubblesortOnce(a) {
  let copy = [...a];

  for (let i = 0; i < copy.length; i++){
    if (copy[i] > copy[i+1]){
      [copy[i], copy[i+1]] = [copy[i+1], copy[i]]
    }
  } 
  return copy
}
