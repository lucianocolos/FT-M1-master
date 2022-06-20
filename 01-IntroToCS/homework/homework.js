'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = parseInt(num, 2);
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  const binary = num.toString(2);
  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}