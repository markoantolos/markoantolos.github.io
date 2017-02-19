function formatPrice(price) {
  return '$' + price.toFixed(2);
}

function formatPrices(prices) {
  return prices.map(formatPrice).join(' / ');
}

export { formatPrice, formatPrices };
