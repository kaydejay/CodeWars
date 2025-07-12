function isPalindrome(x) {
  let lower = x.toLowerCase()
  let reverse = x.split('').reverse().join('').toLowerCase()
  if (x.length === 1){
    return true
  }else if(reverse === lower){
    return true
  }else{
    return false
  }
}
