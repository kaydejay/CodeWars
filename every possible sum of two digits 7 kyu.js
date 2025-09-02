function digits(num){
  let arr = [];
  let str = String(num).split('').map(Number);
  
  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j < str.length; j++){
      arr.push(str[i] + str[j])
    }
  }
  
  return arr
}
