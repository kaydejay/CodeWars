function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  
  arr.forEach((e,i) => {
    arr[i] = e * e;
  });
    
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  let integer = Math.sqrt(sum) / 2
  return Math.floor(integer)
}
