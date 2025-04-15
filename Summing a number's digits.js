function sumDigits(number) {
  let arr = Math.abs(number).toString().split("")
  return arr.reduce((a,c) => a + Number(c), 0)
}
