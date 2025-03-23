function likes(names) {
  let count = 0;
  
  if (names.length === 0){
    return 'no one likes this'
  }else if (names.length === 1){
    return `${names} likes this`
  }else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else if (names.length > 3){
    for (let i = 2; i < names.length; i++){
      count++
    }
    return `${names[0]}, ${names[1]} and ${count} others like this`
  }

}
