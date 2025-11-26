function reverseLetter(str) {
  let arr = str.split('')
  let filtered = arr.filter((c) => c.toLowerCase() != c.toUpperCase())
  let result = filtered.reverse().join('')

  return result
}
