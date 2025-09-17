function shorterReverseLonger(a,b){
  if (a.length == b.length || a.length > b.length){
    let shorter = b;
    let longer = a.split('').reverse().join('');
    return `${shorter}${longer}${shorter}`
  }else{
    let shorter = a;
    let longer = b.split('').reverse().join('');
    return `${shorter}${longer}${shorter}`
  }
}
