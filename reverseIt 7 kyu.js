function reverseIt(data){
  if (typeof data == 'string'){ 
    return data.split('').reverse().join('');
  }else if (typeof data == 'number') {
    let str = data.toString().split('').reverse().join('');
    return Number(str)
  }else{
    return data
  }
}
