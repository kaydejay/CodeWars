function rentalCarCost(d) {
  if (d <=2){
    return d*40
  }else if(d >= 3 && d < 7){
    return (d*40) - 20
  }else{
    return (d*40) - 50
  }
}
