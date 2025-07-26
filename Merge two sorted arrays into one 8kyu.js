function mergeArrays(arr1, arr2) {
  let summed = arr1.concat(arr2)
  let sorted = new Set (summed.sort((a,b) => a - b))
  return [...sorted]
}
