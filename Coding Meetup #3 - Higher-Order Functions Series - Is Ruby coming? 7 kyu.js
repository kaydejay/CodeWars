function isRubyComing(list) {
  if (list.filter(developer =>
    developer.language === 'Ruby').length > 0){
      return true
      }else{
        return false
      }
}
