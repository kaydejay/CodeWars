function count(string) {
let occurrenceCount = string.split('').reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc
  }, {});
  
  return occurrenceCount
}
