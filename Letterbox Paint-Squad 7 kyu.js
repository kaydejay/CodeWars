var paintLetterboxes = function(start, end) {
  let str = '';

  for (let i = start; i <= end; i++){
    str += i
  }

  let obj = {
    0 : 0,
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
    9 : 0,
  }
  
  str.split('').map((cur) => {
    obj[cur] = (obj[cur] || 0) + 1;
  });
  
  return Object.values(obj);  
}
