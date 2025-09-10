function explode(x){
  let sum = 0;
  let result = [];
  if (typeof x[0] == typeof x[1] && typeof x[0] == 'number'){
    sum += x[0] + x[1];
    return Array.from({length: sum}).fill(x)
  }if (typeof x[0] == 'number' || typeof x[1] == 'number'){
    typeof x[0] == 'number' ? sum = x[0] : sum = x[1]
    return Array.from({length:sum}).fill(x)
  }if (typeof x[0] == typeof x[1] && typeof x[0] == 'string'){
    return 'Void!'
  }
}
