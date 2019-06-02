// CodeWars Link: https://www.codewars.com/kata/the-office-iii-broken-photocopier/train/javascript

/* The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
*  Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
*  Given a string of binary, return the version the photocopier gives you as a string.
*/

function broken(x) {
  var result = x.split('').map(num => {
    var val = num === '0' ?  1 : 0;
    return val;
  }).join('');

  return result;
}


assertSimilar(broken("1"), "0");
assertSimilar(broken("10000000101101111110011001000"), "01111111010010000001100110111");
assertSimilar(broken("100010"), "011101");

function assertSimilar(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

/* CodeWars solution

function broken(x) {
  return x.split('').map(a => a == "0" ? "1" : "0").join('');
}

*/