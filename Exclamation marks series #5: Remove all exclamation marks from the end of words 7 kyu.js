function remove (string) {
  let arr = string.split(' ');
  let result = arr.map(word => {
    while (word.endsWith('!')) { 
      word = word.slice(0, -1);
    }
    return word;
  });
  return result.join(' ');
}
