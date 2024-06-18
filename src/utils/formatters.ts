
function formatToUSD(value: string) {
  const floatValue = parseFloat(value); 
  return floatValue.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

export { formatToUSD }