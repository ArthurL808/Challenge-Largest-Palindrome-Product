/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var nines = "";
  for (let x = 0; x < digits; x++) {
    nines += "9";
  }
  nines = parseInt(nines)
  for (i = 10; i <= nines; i++) {
    for (let j = 10; j <= nines; j++) {
      factor_0 = i;
      factor_1 = j;
      let x = factor_0 * factor_1;
      var pal = parseInt(
        x
          .toString()
          .split("")
          .reverse()
          .join("")
      );
      if (x === pal && x > palindromeNumber) {
        palindromeNumber = x;
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
