// Codewars Link: https://www.codewars.com/kata/5c563cb78dac1951c2d60f01
/* 
  INTRODUCTION
  The Club Doorman will give you a word.To enter the Club you need to provide the right number according to provided the word.

  Every given word has a doubled letter, like 'tt' in lettuce.

  To answer the right number you need to find the doubled letter 's position of the given word in the alphabet and multiply this number per 3.

  It will be given only words with one doubled letter.


  EXAMPLE
  Lettuce is the given word.
  't' is the doubled letter and it 's position is 20 in the alphabet.

  The answer to the Club Doorman is 20 * 3 = 60 
*/

function passTheDoorMan(word) {
  let arr = [...word];
  let sameWord;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      sameWord = arr[i];
      break;
    }
  }

  return (sameWord.charCodeAt(0) - 96) * 3;
}

  assertSimilar(passTheDoorMan("lettuce"), 60);
  assertSimilar(passTheDoorMan("hill"), 36);
  assertSimilar(passTheDoorMan("apple"), 48);

  function assertSimilar(ret, correctRet) {
    if (ret === correctRet) {
      return console.log(`success: ${ret} as expected.`);
    }
    console.warn(`failed: ${correctRet}, got ${ret} instead.`);
  }

  // codeWars Solution

/*   
function passTheDoorMan(word) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letter;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === word[i + 1]) {
      letter = word[i];
    }
  }
  return (alphabet.indexOf(letter) + 1) * 3
} 
  
  */