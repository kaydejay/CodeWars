function stantonMeasure(a){
  let copy = [...a];
  let oneCount = 0;
  let secondCount = 0;

  for (let i = 0; i < copy.length; i++){
    if (copy[i] == 1){
      oneCount += 1;
    }
  }

  for (let i = 0; i < copy.length; i++){
    if (copy[i] == oneCount){
      secondCount += 1;
    }
  }

  return secondCount;
}
