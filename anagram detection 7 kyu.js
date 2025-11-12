var isAnagram = function(test, original) {
  return makeNew(test) == makeNew(original) ? true : false;
};

let makeNew = function (str){
  return str.toLowerCase().split('').sort().join('');
}

//   let newTest = test.toLowerCase().split('').sort().join('');
//   let newOriginal = original.toLowerCase().split('').sort().join('');

//   if (newTest == newOriginal){
//     return true
//   }else{
//     return false
//   }
