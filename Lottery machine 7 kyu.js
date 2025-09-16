function lottery(str){
  let nums = str.replace(/\D/g, "")
  let numSet = new Set (nums)
  let newStr = Array.from(numSet).join('')
  
  if (/^\D*$/.test(str) == true){
    return 'One more run!'
  }else{
    return newStr
  }
}
