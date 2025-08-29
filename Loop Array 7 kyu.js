function loopArr(arr, direction, steps) {
  let copy = [...arr];
  
  for (let i = 0; i < steps; i++){
    copy = direction == 'right' ? moveToTheRight(copy) : moveToTheLeft(copy); 
  }
  
  return copy
}

function moveToTheRight(myar) {
  let temp = [...myar]
  let last = temp.pop();
  temp.unshift(last)
  return temp
}

function moveToTheLeft(myar) {
  let temp = [...myar]
  let first = temp.shift();
  temp.push(first);
  return temp
}
