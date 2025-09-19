function search(budget, prices) {
  let result = ''
  let sorted = prices.sort((a,b) => a - b);
  for (let i = 0; i < prices.length; i++){
    if (prices[i] <= budget){
      result += `${prices[i]},`
    }
  }

  return result.slice(0, -1);
}
