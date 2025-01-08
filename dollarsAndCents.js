function formatMoney(amount){
  let formattedPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  useGrouping: false,
}).format(amount);
  return formattedPrice
}
