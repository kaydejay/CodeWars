function getDrinkByProfession(param){
  let lowerParam = param.toLowerCase()
  console.log(lowerParam)
  if (lowerParam === 'jabroni'){
    return 'Patron Tequila'
  }else if(lowerParam === 'school counselor'){
    return 'Anything with Alcohol'
  }else if(lowerParam === 'programmer'){
    return 'Hipster Craft Beer'
  }else if(lowerParam === 'bike gang member'){
    return 'Moonshine'
  }else if(lowerParam === 'politician'){
    return 'Your tax dollars'
  }else if(lowerParam === 'rapper'){
    return 'Cristal'
  }else{
    return 'Beer'
  }
}
