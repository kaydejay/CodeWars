var number=function(array){
  return array.map((num, index) => `${index+1}: ${array[index]}`);
}
// var number=function(array){
//   let newArr = []
//   for (let i = 0; i < array.length; i++){
//     newArr.push(`${i+1}: ${array[i]}`)
//   }
//   return newArr
// }
