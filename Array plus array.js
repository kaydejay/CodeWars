function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((acc, cur) => acc + cur, 0)
  let sum2 = arr2.reduce((acc, cur) => acc + cur, 0)
  return sum1 + sum2
}
