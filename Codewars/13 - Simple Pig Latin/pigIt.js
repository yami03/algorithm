// Codewars Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f
/*
* Move the first letter of each word to the end of it, then add "ay"
* to the end of the word.Leave punctuation marks untouched.
* 
* Examples
* 
* pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
* pigIt('Hello world !'); // elloHay orldway !
*/

function pigIt(str) {
  const result = str.split(' ').map(word => {
    if (word !== '!' && word !== '?') {
      word = word + word[0] + 'ay';
      word = word.slice(1);
    }
    return word;
  }).join(' ');
  return result;
}

assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
assertEquals(pigIt('This is a string !'), 'hisTay siay aay tringsay !');

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}