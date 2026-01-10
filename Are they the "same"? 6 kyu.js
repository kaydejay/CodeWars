function comp(array1, array2){
  if (array1 === null || array2 === null){
    return false
  }
  const map1 = array1.map((x) => Math.pow(x, 2));
  return sortJoin(map1) === sortJoin(array2)
  
//   let sort1 = map1.sort((a, b) => a - b)
//   let sort2 = array2.sort((a, b) => a - b)
//   let str1 = sort1.join()
//   let str2 = sort2.join()

//   return str1 === str2
}

function sortJoin(arr){
  return arr.sort((a,b) => a - b).join()
}
