function positiveSum(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      newArr.push(arr[i])
    }
  }
  return newArr.reduce((acc, cur) => acc + cur, 0)
}
