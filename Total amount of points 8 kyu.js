function points(games) {
  let points = 0

  for (let i = 0; i < games.length; i++){
    let scores = games[i].split(':')
    let x = parseInt(scores[0]);
    let y = parseInt(scores[1]);
   
    if (x > y){
      points += 3;
    }else if (x === y){
      points += 1;
    }
  }
return points
}
