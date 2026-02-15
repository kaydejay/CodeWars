function solve(arr) {
  let copy = [...arr]
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  return copy.map(word => {
    let count = 0;
    let lowerCase = word.toLowerCase();
    
    for (let i = 0; i < lowerCase.length; i++) {
      if (lowerCase[i] === alphabet[i]) {
        count++;
      }
    }
    return count;
  });
}
