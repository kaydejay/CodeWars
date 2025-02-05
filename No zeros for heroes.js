function noBoringZeros(n) {
  let str = n.toString().split('');
  for (let i = str.length; i > 0; i--){
    if (n == 0){
      return 0;
    } else if(str[str.length-1] == '0'){
      str.pop();
    }else{
      return +str.join('')
    }
  }
}
