function aliasGen(first, last){
  let upperFirst = first.charAt(0).toUpperCase();
  let upperLast = last.charAt(0).toUpperCase();
  
  if (!/[A-Z]/.test(upperFirst) || !/[A-Z]/.test(upperLast)){
    return 'Your name must start with a letter from A - Z.'
  }
  
  let newName1 = firstName[upperFirst];
  let newName2 = surname[upperLast];
  
  return `${newName1} ${newName2}`
}
