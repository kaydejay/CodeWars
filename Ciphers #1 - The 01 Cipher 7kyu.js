// function encode(plaintext){
//   let lower = plaintext.toLowerCase()
//   let result = ''
// //   let alphabet = {
// //     a : 0,
// //     b : 1,
// //     c : 0,
// //     d : 1, 
// //     e : 0,
// //     f : 1, 
// //     g : 0, 
// //     h : 1, 
// //     i : 0,
// //     j : 1,
// //     k : 0,
// //     l : 1,
// //     m : 0,
// //     n : 1, 
// //     o : 0,
// //     p : 1,
// //     q : 0,
// //     r : 1, 
// //     s : 0, 
// //     t : 1, 
// //     u : 0,
// //     v : 1, 
// //     w : 0,
// //     x : 1,
// //     y : 0,
// //     z : 1
// //   }
  
//   for (let i = 0; i < lower.length; i++){
//     if ( (lower[i] in alphabet) ){
//       result += alphabet[lower[i]]
//     }else{
//       result += lower[i]
//     }

//   }
//   return result
// }

//////////////////////////
function encode(plaintext){
  let lett = plaintext.toLowerCase()
  let result = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
//   lower = 'found'
//   lower[0] -> 'f'
//   alphabet.indexOf('f') -> number
  
  
  for (let er = 0; er < lett.length; er++){
    let spot = alphabet.indexOf(lett[er])
    
    if ( spot === -1 ){
      result += lett[er]
      continue
    }
    
    result += spot % 2 === 0 ? 0 : 1 
  }
  return result
}
