function twoSort(s) {
  let sorted = s.sort();
  let initialWord = sorted[0]
  let split = initialWord.split('')
 
  for (let i = 0; i < split.length - 1 ; i++){
    split[i] += '***'
  }
  
  return split.join('')
  
}
