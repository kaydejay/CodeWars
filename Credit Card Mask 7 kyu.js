function maskify(cc) {
  if (cc.length <= 4){
    return cc
  }else{
    let end = cc.slice(cc.length-4, cc.length);
    return end.padStart(cc.length, "#");
  }
}
