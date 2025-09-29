function findOdd(A) {
  let occurrenceCount = A.reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc
  }, {});
    
  let entries = Object.entries(occurrenceCount);

  for (let i = 0; i < entries.length; i++){
    if (entries[i][1] % 2 == 1){
      return +entries[i][0];
    }
  }
}
