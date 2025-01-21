function findAverage(nums) {
  let sum = nums.reduce((acc, c) => acc + c, 0)
  let average = sum /(nums.length)
  return average
}
