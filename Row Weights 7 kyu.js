function rowWeights(array){
  let team1 = [];
  let team2 = [];
  
  for (let i = 0; i < array.length; i++){
    if (i % 2 == 0){
      team1.push(array[i])
    }else{
      team2.push(array[i])
    } 
  }
  
  let team1Sum = team1.reduce((acc,cur) => acc + cur, 0);
  let team2Sum = team2.reduce((acc,cur) => acc + cur, 0);
  
  return [team1Sum, team2Sum];
}
