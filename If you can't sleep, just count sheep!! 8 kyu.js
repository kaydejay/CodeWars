var countSheep = function (num){
  let result = '';
  for (let i = 0; i <= num; i++){   
    if (i == 0){
      continue
    }
    result += `${i} sheep...`
  }
  return result
}
