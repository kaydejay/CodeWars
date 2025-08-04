function correct(string) {
  let newStr = '';
  
  for (const char of string){
    if (char === '0'){
      newStr += 'O'
    }else if (char === '5'){
      newStr += 'S'
    }else if (char === '1'){
      newStr += 'I'
    }else{
      newStr += char
    }
  }

  return newStr
  
}
