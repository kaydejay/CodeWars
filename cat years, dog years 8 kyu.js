  if (humanYears == 1){
    return [humanYears, 15, 15]
  }else if (humanYears == 2){
    return [humanYears, 24, 24]
  }else{
    return [humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5)];
  }
}
