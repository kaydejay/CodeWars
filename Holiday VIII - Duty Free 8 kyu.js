function dutyFree(normPrice, discount, hol){
  let discountPrice = normPrice * (discount * 0.01);
  return Math.floor(hol / discountPrice)
}
