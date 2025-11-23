// function nbDig(n, d) {
//   let count = 0;
  
//   for (let i = 0; i <= n; i++){
//     let stri = String(i*i)
//     let dArr = stri.split("").filter((letter) => letter == d)
//     count += dArr.length
//   }

//   return count
// }

function nbDig(n, d) {
  let numStr = '';
  
  for (let i = 0; i <= n; i++){
    numStr += String(i*i)
  }
  
  let dArr = numStr.split("").filter((letter) => letter == d)
  return dArr.length
}
