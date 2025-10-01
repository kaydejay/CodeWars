function nbYear(p0, percent, aug, p) {
  let result = 0; 
  let pop = p0;
  
  do {
    pop = Math.floor(pop + (pop * (percent/100)) + aug);
    result += 1;  
  } while (pop < p);
  
  return result
}
