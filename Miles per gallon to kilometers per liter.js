function converter (mpg) {
  let kplConversion = 1.609344/4.54609188
  let result = kplConversion * mpg
  return(Math.round(result * 100) / 100)
}
