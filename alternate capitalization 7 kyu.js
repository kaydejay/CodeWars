function capitalize(s){
  let str1 = ''
  let str2 = ''
  let result = [];
  
  for (let i = 0; i < s.length; i++){
    if (i % 2 == 0) {
        str1 += s[i].toUpperCase();
    } else {
        str1 += s[i];
    }
  }
  
  result.push(str1)
  
  for (let i = 0; i < s.length; i++){
    if (i % 2 == 1) {
        str2 += s[i].toUpperCase();
    } else {
        str2 += s[i];
    }
  }
  
  result.push(str2)
  
  return result
};
