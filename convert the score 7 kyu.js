function scoreboard(string) {
  let strArr = string.split(' ')
  let arr = []
  let nums = {
    nil : 0,
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9
  }
  
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i] in nums){
      arr.push(nums[strArr[i]])
    }
  }
  return arr
}
