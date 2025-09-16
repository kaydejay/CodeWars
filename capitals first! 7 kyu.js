function capitalsFirst(str){
  let split = str.split(' ').filter(a => /^[a-zA-Z]$/.test(a[0]))
  
  split.sort((a, b) => {
    let al = a[0];
    let bl = b[0];
    let ac = a[0].toUpperCase() == al;
    let bc = b[0].toUpperCase() == bl;
    let an = ac == true ? 1 : -1;
    let bn = bc == true ? 1 : -1;
    
    if (an < bn) {
      return 1; 
    } else if (an > bn) {
      return -1;
    } else {
      return 0;
    } 
  });
  
  return split.join(' ');
  
//   for (let i = 0; i < split.length; i++){
//     if (split[i][0] == split[i][0].toUpperCase()){
//       result += split[i] + ' '
//     }
//   }
//   for (let i = 0; i < split.length; i++){
//     if (split[i][0] == split[i][0].toLowerCase()){
//       console.log(typeof split[i][0])
//       result += split[i] + ' '
//     }
//   }
//   return result.trim()
}
