function totalLicks(env) {
  let objArray = Object.entries(env);
  let sum = objArray.reduce((acc, cur) => acc + cur[1],252);
  let sorted = objArray.sort((a,b) => b[1] - a[1]);
  let answer = `It took ${sum} licks to get to the tootsie roll center of a tootsie pop.`

  return sorted.length == 0 || sorted[0][1] < 0 ? answer : `${answer} The toughest challenge was ${sorted[0][0]}.`; 
}
