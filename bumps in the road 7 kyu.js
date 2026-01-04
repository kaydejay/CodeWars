function bump(x){
  let arr = x.split('');
  let total = arr.filter((e) => e == 'n');
  return total.length <= 15 ? 'Woohoo!' : 'Car Dead';
}
