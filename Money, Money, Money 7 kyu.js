function calculateYears(principal, interest, tax, desired) {
  
  if (principal == desired){
    return 0
  }
  
  let years = 0;
  let newPrincipal = principal;   
  
  do {
    let interestSum = newPrincipal * interest;
    let taxed = interestSum * tax;
    newPrincipal = newPrincipal + interestSum - taxed;
    years++
      
  } while (newPrincipal < desired);

  return years
}
