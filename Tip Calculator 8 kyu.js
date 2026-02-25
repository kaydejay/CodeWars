function calculateTip(amount, rating) {
  let lowerCaseRating = rating.toLowerCase()
  
  if (lowerCaseRating == 'terrible'){
    return Math.ceil(amount * 0)
  }else if (lowerCaseRating == 'poor'){
    return Math.ceil(amount * .05)
  }else if (lowerCaseRating == 'good'){
    return Math.ceil(amount * .10)
  }else if (lowerCaseRating == 'great'){
    return Math.ceil(amount * .15)
  }else if (lowerCaseRating == 'excellent'){
    return Math.ceil(amount  * .20)
  }else{
    return 'Rating not recognised'
  }
}

////////

function calculateTip(amount, rating) {
  let lowerCaseRating = rating.toLowerCase()
  
  if (lowerCaseRating == 'terrible'){
    return Math.ceil(amount * 0)
  }else if (lowerCaseRating == 'poor'){
    return Math.ceil(amount * .05)
  }else if (lowerCaseRating == 'good'){
    return Math.ceil(amount * .10)
  }else if (lowerCaseRating == 'great'){
    return Math.ceil(amount * .15)
  }else if (lowerCaseRating == 'excellent'){
    return Math.ceil(amount  * .20)
  }else{
    return 'Rating not recognised'
  }
}
