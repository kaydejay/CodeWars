function sortArray(array) {
  const copiedArray = []
  const toSortArray = [...array].sort((a, b) => b - a)
  for (let i = 0; i < array.length; i++){
    if (Math.abs(array[i]) % 2 === 1){
      let pop = toSortArray.pop()
      while (Math.abs(pop) % 2 === 0){
        pop = toSortArray.pop()
      }
      copiedArray.push(pop)
    } else {
      copiedArray[i] = array[i]
    }
  }
  return copiedArray  
}
