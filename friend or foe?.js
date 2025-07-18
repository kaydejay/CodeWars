function friend(friends){
  let arr = []

  for (let i = 0; i < friends.length; i++){
    if(friends[i].length === 4 && isNaN(friends[i])){
      arr.push(friends[i])
    }
  }

  return arr
}
