function solution(string) {
  let result = "";
  for (let letter of string) {
    if (letter == letter.toUpperCase()) {
      result += ` ${letter}`;
    } else { 
      result += letter;
    }
  }
  return result;
}
