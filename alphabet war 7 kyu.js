function alphabetWar(fight){
  let left = 0;
  let right = 0; 
  let leftSide = {
    w : 4,
    p : 3,
    b : 2,
    s : 1
  }
  let rightSide = {
    m : 4,
    q : 3,
    d : 2,
    z : 1
  }
  
  for (let i = 0; i < fight.length; i++){
    if (fight[i] in rightSide){
      right += rightSide[fight[i]]
    }if (fight[i] in leftSide){
      left += leftSide[fight[i]]
    }
  }
  
  return right > left ? 'Right side wins!' : left > right ? 'Left side wins!' : `Let's fight again!`
 
}
