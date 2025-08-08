function isVow(a){
  let vowels = {
    97 : 'a',
    101 : 'e', 
    105 : 'i',
    111 : 'o',
    117 : 'u'
  }
  
  for (let i = 0; i < a.length; i++){
    if(a[i] in vowels){
      a[i] = vowels[a[i]]
    }
  }
  
  return a
}
