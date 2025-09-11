function testResult(array) {
  let average = Number(((array.reduce((acc, cur) => acc + cur, 0)) / array.length).toFixed(3));
  let scores = {
    h : 0,
    a : 0,
    l : 0
  }
  
  for (let i = 0; i < array.length; i++){
    let grade = array[i]
    let mark = grade > 8 ? 'h' : grade > 6 ? 'a' : 'l'
    scores[mark] += 1;
  }
  
  let answer = [average, scores];

  if (scores['h'] == array.length)
    answer.push('They did well')
  
  return answer
}
