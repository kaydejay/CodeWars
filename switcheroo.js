function switcheroo(x){
  return x.split('').map(char => {
    if (char === 'a') {
      return 'b';
    } else if (char === 'b') {
      return 'a';
    } else {
      return char;
    }
  }).join('');
}


function switcheroo(x){
  let newX = ""
  for (let i = 0; i < x.length; i++){
    if (x[i] === "a"){
      newX += "b"
    }else if(x[i] === "b"){
     newX += "a"
    }else if(x[i] === "c"){
      newX += "c"
    }
  }
  return newX
}
