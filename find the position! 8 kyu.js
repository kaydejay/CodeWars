function position(letter){
  let position = letter.charCodeAt(0)
  
  if (position >= 97 && position <= 122){ 
    return `Position of alphabet: ${position - 97 + 1}`
  }
} 
