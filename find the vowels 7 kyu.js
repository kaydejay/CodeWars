function vowelIndices(word){
  let lower = word.toLowerCase().split('');
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let result = [];
  
  for (let i = 0; i < lower.length; i++){
    if (vowels.includes(lower[i])){
      result.push(i+1)
    }
  }
  
  return result
}
