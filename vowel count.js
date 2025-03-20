function getCount(str) {
  let count = 0;
  let splitStr = str.split('')
  
  for (let i = 0; i < splitStr.length; i++){
    if (splitStr[i] === 'a'){
      count++
    }else if (splitStr[i] === 'e'){
      count++
    }else if (splitStr[i] === 'i'){
      count++
    }else if (splitStr[i] === 'o'){
      count++
    }else if (splitStr[i] === 'u'){
      count++
    }
  }
  
  return count;
}
