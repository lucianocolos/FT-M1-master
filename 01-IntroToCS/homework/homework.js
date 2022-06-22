'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = parseInt(num, 2);
  return decimal;
  /* Another way to do it
  var num = STRING
  digit * base(2) ** Position
  Position string[i] 0 1 2
  digit '1 1 0'
  Position formula 2 1 0
  Base -> 2
  0*2**0 + 1*2**1 + 1*2**2
  
  // Code goes here
  
  var result = 0;
  var position = 0;
  for (let i = num.length-1; i >= 0; i--){ //recorre el array al reves
    result = result + num[i] * 2 ** position
    position ++
  }

  return result

  */
}

function DecimalABinario(num) {
  // tu codigo aca
  const binary = num.toString(2);
  return binary;

  /* Another way to do it
  // 11 -- 11/2 -- 5.5 -- 5 | 1
  // 5 -- 5/2 -- 2.5 --   2 | 1
  // 2 -- 2/2 -- 1 --     1 | 0
  // 1 -- 1/2 -- 0 --     1 | 1  -- 1 0 1 1
  
  var result = '';
  while (num !== 0) {
   result = num % 2 + result;
   num = Math.floor(num/2)
  }
  return result;
  */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}