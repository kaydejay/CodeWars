function gooseFilter (birds) {
  let copy = [...birds];
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  let result = copy.filter((word) => !geese.includes(word))
  
  return result
};
