function replace(s) {
  let newStr = ''
  let vowelStr = 'aeiou'
  for (i = 0; i < s.length; i++){
    if (vowelStr.includes(s[i].toLowerCase())){
      newStr += '!'
    }else{
      newStr += s[i]
    }
  }
return(newStr)
 } 
