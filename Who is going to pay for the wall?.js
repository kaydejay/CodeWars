function whoIsPaying(name){
  let newArray = []
  if(name.length <= 2){
    newArray.unshift(name)
    console.log(newArray)
    return newArray
  }else{
    newArray.unshift(name)
    let firstTwoLetters = name.slice(0, 2)
    newArray.push(firstTwoLetters)
    return newArray
  }
}
