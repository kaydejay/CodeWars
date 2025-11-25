function solve(s){
  if (s == s.toLowerCase()){
    return s.toLowerCase()
  }
  if (s == s.toUpperCase()){
    return s.toUpperCase()
  }
  
  let upperCount = 0;
  let lowerCount = 0;
  
  for (let i = 0; i < s.length; i++){
    let char = s[i];
    if (char >= 'A' && char <= 'Z'){
      upperCount++;
    }else if (char >= 'a' && char <= 'z'){
      lowerCount++;
    }
  }
  
  return (upperCount > lowerCount) ? s.toUpperCase() : s.toLowerCase();
}
