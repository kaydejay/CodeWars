function longest(s1, s2) {
  let strSet = new Set(s1 + s2);
  let arr = Array.from(strSet);
  return arr.sort().join('')
}
