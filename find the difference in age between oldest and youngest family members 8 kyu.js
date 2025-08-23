function differenceInAges(ages){
  let sorted = ages.sort((a,b) => a - b);
  let youngest = sorted[0]
  let oldest = sorted[sorted.length - 1]
  let difference = oldest - youngest
  return [youngest, oldest, difference]
}
