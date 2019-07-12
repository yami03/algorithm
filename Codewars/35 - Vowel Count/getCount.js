// Codewars: https://www.codewars.com/kata/vowel-count/javascript

function getCount(str) {
  var vowelsCount = 0;
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  
  for(let i = 0; i < vowel.length; i++) {
    var arr = str.split(vowel[i]);
    vowelsCount += arr.length - 1;
  }
  
  return vowelsCount;
}
assertEquals(getCount("abracadabra"), 5);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}
