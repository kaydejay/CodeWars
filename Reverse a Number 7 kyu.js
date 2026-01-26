function reverseNumber(n) {
  let rev = Number(String(Math.abs(n)).split('').reverse().join(''));

  return n < 0 ? -rev : rev;
}
