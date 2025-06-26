function removeChar(str){
 if (str.length == 2){
   return ''
 }
  let arr = str.split('');
  let newArr = arr.shift();
  let secondNewArr = arr.pop()
  let newStr = arr.join('')
  return newStr
};
