function vaporcode(string) {
  return string.toUpperCase().replaceAll(' ', '').replaceAll('', '  ').trim();
}

// function vaporcode(string) {
//   let upper = string.toUpperCase();
//   let space = upper.replaceAll(' ', '')
//   let result = space.replaceAll('', '  ')
//   return result.trim();
// }
