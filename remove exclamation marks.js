function removeExclamationMarks(s) {
  let newS = ''
  for (let i =0; i < s.length; i++){
    if (s[i] != '!'){
      newS += s[i]
    }
  }
  return newS
}
