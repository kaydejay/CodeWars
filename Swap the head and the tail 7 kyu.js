function swapHeadAndTail(arr) {
  let result = [];
  let length = arr.length;
  
  if (length % 2 === 1){
    let midI = Math.ceil(length / 2)-1
    let midV = arr[midI];
    let slicedFront = arr.slice(0, midI)
    let slicedBack = arr.slice(midI+1, length)
    return [].concat(slicedBack,midV,slicedFront)
  }
  
  if (length % 2 === 0){
    let midI = (length / 2)
    let slicedFront = arr.slice(0, midI)
    let slicedBack = arr.slice(midI, length)
    return [].concat(slicedBack,slicedFront)
  }
}
