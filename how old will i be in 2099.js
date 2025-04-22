function  calculateAge(num1, num2) {  
  let after = Math.abs(num2 - num1);
  let before = Math.abs(num1 - num2);
  
  if (num1 === num2) {
    return 'You were born this very year!'
  }else if ((num2 - num1) === 1){
    return 'You are 1 year old.'
  }else if ((num1-num2) === 1){
    return 'You will be born in 1 year.'
  }else if (num1 > num2){
    return `You will be born in ${after} years.`
  }else if (num1 < num2){
    return `You are ${after} years old.`
}
  }
