function well(x){
  let gC = x.filter((e) => e == 'good').length
  return gC == 0 ? 'Fail!' : gC >= 3 ? 'I smell a series!' : 'Publish!';
}
