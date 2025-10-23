var capitals = function (word) {
  return [...word].reduce((acc,cur,index)=> {
    if (cur == cur.toUpperCase()){
      acc.push(index)
    }
    return acc
  }, [])
}; 

// var capitals = function (word) {
//   let result = [];

//   for (let i = 0; i < word.length; i++){
//     if (word[i] == word[i].toUpperCase()){
//       result.push(i)
//     }
//   }
//   return result
// };
