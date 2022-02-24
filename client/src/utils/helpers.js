function convertToEuro(priceHT) {
  return parseInt(priceHT) / 100;
}

function addTva(priceHT) {
  const TVA = 20 / 100;

  const montantTVA = priceHT * TVA;

  return priceHT + montantTVA;
}

function formatPrice(priceHT) {
  return addTva(convertToEuro(priceHT)).toFixed(2);
}

function ucfirst(word) {
  if (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

export { ucfirst, formatPrice, convertToEuro };
