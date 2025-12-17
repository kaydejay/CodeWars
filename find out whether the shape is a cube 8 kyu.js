function cubeChecker(volume, side){ 
  if (volume <= 0 || side <= 0 || volume < side){
    return false;
  }
  if (Math.pow(side, 3) == volume){
    return true;
  }else{
    return false;
  }
};
