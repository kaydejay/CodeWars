function checkExam(array1, array2) {
  let grade = 0;
  for (let i = 0; i < array1.length; i++){
    if (array1[i] == array2[i]){
      grade += 4
    }else if (array1[i] == '' || array2[i] == ''){
      grade += 0
    }else if (array1[i] !== array2[i]){
      grade -= 1
    }
  }
  
  return grade < 0 ? 0 : grade;
}
