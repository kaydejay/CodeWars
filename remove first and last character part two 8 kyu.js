function array(string) {
  let split = string.split(',')
  if (split.length <= 2){
    return null;
  }else{
    split.pop()
    split.shift()
    return split.join(' ')
  }
}
